import { useEffect, useState } from "react"
import { Button } from "../../components/ui/button";
import EmptyList from "../../../assets/EmptyList.jpg";
import {
  Plus, Pencil, Trash2, Search,
  Hash,
  User,
  Briefcase,
  Layers,
  MapPin,
  CalendarDays,
  Phone,
  Settings
} from "lucide-react"
import { Vendor } from "../../../types/vendor.types"
import { vendorAPI } from "../../../api/vendor.api"
import VendorModal from "../../components/ui/VendorFormModal"
import { SEOHead } from "../../components/SEOHead";

const avatarColors = [
  "#8B0000",
  "#6B0000",
  "#D53E0F",
  "#D4AF37",
  "#FFD700",
  "#2F5233",
  "#1F3822",
]
export function VendorManagement() {
  const [vendors, setVendors] = useState<Vendor[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null)
  const [search, setSearch] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [serviceFilter, setServiceFilter] = useState("all")
  
  const loadVendors = async () => {
    const data = await vendorAPI.getVendors()
    setVendors(data)
  }
  useEffect(() => {
    loadVendors()
  }, [])
  const handleCreate = async (data: Partial<Vendor>) => {
    await vendorAPI.createVendor(data as any)
    loadVendors()
  }
  const handleUpdate = async (data: Partial<Vendor>) => {
    if (!selectedVendor) return
    await vendorAPI.updateVendor(selectedVendor?.vendor_id!, data)
    loadVendors()
  }
  const handleDelete = async (vendor_id: string) => {
    if (!confirm("Delete vendor?")) return
    await vendorAPI.deleteVendor(vendor_id)
    loadVendors()
  }
  const services = [...new Set(vendors.map(v => v.service_type))]
  const filtered = vendors.filter(v => {
    const matchSearch =
      v.vendor_name.toLowerCase().includes(search.toLowerCase()) ||
      v.business_name.toLowerCase().includes(search.toLowerCase())
    const matchLocation =
      locationFilter === "all" || v.location === locationFilter
    const matchService =
      serviceFilter === "all" || v.service_type === serviceFilter
    return matchSearch && matchLocation && matchService
  })
  const locations = [...new Set(vendors.map(v => v.location))]
  const serviceColors: Record<string, string> = {
    Catering: "bg-yellow-50",
    Photography: "bg-blue-50",
    Decoration: "bg-pink-50",
    Music: "bg-purple-50"
  }
  const getAvatarColor = (name: string) => {
    const index = name.charCodeAt(0) % avatarColors.length
    return avatarColors[index]
  }
  return (
    <>
      <SEOHead
        title="Event & Booking Management"
        description="Manage events and bookings"
      />
      <div className="p-1 space-y-6 bg-[#F9FAFB] min-h-screen">
        <div className="flex justify-between items-center bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white p-6 rounded-xl">
          <div>
            <h1 className="text-3xl font-semibold">
              Vendor Management
            </h1>
            <p className="text-gray-200">
              Manage Vendor details and services
            </p>
          </div>
          <Button className="bg-[#FFD700] text-[#8B0000] hover:bg-[#D4AF37]"
            onClick={() => {
              setSelectedVendor(null)
              setModalOpen(true)
            }}>
            <Plus className="mr-2" size={18} />
            Add Vendor
          </Button>
        </div>

        {filtered.length > 0 && (
          <div className="flex flex-col md:flex-row md:items-center gap-4 rounded-xl shadow-sm border p-4 bg-white">
            <div className="flex bg-gray-300 items-center border rounded-lg px-3 py-2 w-full md:flex-1">
              <Search size={16} className="text-gray-400 mr-2" />
              <input
                placeholder="Search vendor..."
                className="outline-none text-sm w-full bg-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="border rounded-lg  text-sm h-[40px] "
              style={{ borderWidth: 2, borderColor: '#6B7280', padding: '8px 12px', justifyContent: 'center', alignItems: 'center' }}
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="all">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <select
              className="border rounded-lg  text-sm h-[40px] "
              style={{ borderWidth: 2, borderColor: '#6B7280', padding: '8px 12px', justifyContent: 'center', alignItems: 'center' }}
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
            >
              <option value="all">All Services</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        )}
        {filtered.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#D2C4B4] text-gray-600 items-center">
                <tr className="bg-gray-50 text-gray-700 text-sm">
                  <th className="p-3 text-left">
                    <div className="flex items-center gap-2">
                      <Hash size={16} />
                      <span>S.No</span>
                    </div>
                  </th>
                  <th className="p-3 text-left">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>Vendor</span>
                    </div>
                  </th>
                  <th className="p-3 text-left">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span>Business</span>
                    </div>
                  </th>
                  <th className="p-3 text-left">
                    <div className="flex items-center gap-2">
                      <Layers size={16} />
                      <span>Service</span>
                    </div>
                  </th>
                  <th className="p-3 text-left">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>City</span>
                    </div>
                  </th>
                  <th className="p-3 text-left">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      <span>Events</span>
                    </div>
                  </th>
                  <th className="p-3 text-left">
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>Phone</span>
                    </div>
                  </th>
                  <th className="p-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Settings size={16} />
                      <span>Actions</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((v, index) => (
                  <tr
                    key={v.vendor_id}
                    style={{ backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#EFD2B0" }}
                    className="border-b"
                  >
                    <td className="p-3 justify-center">{index + 1}</td>
                    <td className="p-3 font-medium flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                        style={{ backgroundColor: getAvatarColor(v.vendor_name) }}
                      >
                        {v.vendor_name.charAt(0).toUpperCase()}
                      </div>
                      {v.vendor_name}
                    </td>
                    <td className="p-3">{v.business_name}</td>
                    <td className="p-3">
                      <span className=" text-left ">
                        {v.service_type}
                      </span>
                    </td>
                    <td className="p-3 text-left">{v.city}</td>
                    <td className="p-3 text-center">{v.events_handled}</td>
                    <td className="p-3 text-left">{v.phone_number}</td>
                    <td className="p-3 flex justify-center gap-3">
                      <button
                        className="p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => {
                          setSelectedVendor(v)
                          setModalOpen(true)
                        }}
                      >
                        <Pencil size={16} className="text-gray-600" />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-red-50"
                        onClick={() => handleDelete(v.vendor_id!)}
                      >
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center">
              <img
                src={EmptyList}
                alt="Empty List"
                className="w-72 md:w-96 mx-auto mb-6 rounded-xl"
              />
              <h1 className="text-3xl text-gray-600 font-semibold text-center">
                No vendors found
              </h1>
            </div>
        )}
        <VendorModal
          open={modalOpen}
          vendor={selectedVendor}
          onClose={() => setModalOpen(false)}
          onSave={selectedVendor ? handleUpdate : handleCreate}
        />
      </div></>
  )
}