import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Vendor } from "../../../types/vendor.types";
interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: Partial<Vendor>) => void;
  vendor?: Vendor | null;
}
const initialForm: Partial<Vendor> = {
  vendor_name: "",
  business_name: "",
  service_type: "",
  location: "",
  city: "",
  phone_number: "",
  price_details: "",
  events_handled: 0,
};
export default function VendorModal({
  open,
  onClose,
  onSave,
  vendor,
}: Props) {
  const [form, setForm] = useState<Partial<Vendor>>(initialForm);
  useEffect(() => {
    if (vendor) {
      setForm(vendor);
    } else {
      setForm(initialForm);
    }
  }, [vendor, open]);
  const resetForm = () => {
    setForm(initialForm);
  };
  const handleClose = () => {
    resetForm();
    onClose();
  };
  const handleSave = () => {
    onSave(form);
    resetForm();
    onClose();
  };
  const handleChange = (
    field: keyof Vendor,
    value: string | number
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white w-[720px] rounded-2xl shadow-xl border border-gray-200">
        <div className="bg-[#8B0000] rounded-t-2xl flex items-center justify-between px-6 py-4">
          <h2 className="text-lg font-semibold text-white">
            {vendor ? "Edit Vendor" : "Add Vendor"}
          </h2>
          <button onClick={handleClose}>
            <X size={18} className="text-white" />
          </button>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Vendor Name
              </label>
              <input
                type="text"
                placeholder="SATHIYAMOORTHI"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
                value={form.vendor_name || ""}
                onChange={(e) =>
                  handleChange("vendor_name", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Business Name
              </label>
              <input
                type="text"
                placeholder="EVENT BUDDIEZ"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
                value={form.business_name || ""}
                onChange={(e) =>
                  handleChange("business_name", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Service Type
              </label>
              <input
                type="text"
                placeholder="Event Planner"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
                value={form.service_type || ""}
                onChange={(e) =>
                  handleChange("service_type", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                placeholder="KURINJIPADI"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
                value={form.city || ""}
                onChange={(e) =>
                  handleChange("city", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="CUDDALORE"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
                value={form.location || ""}
                onChange={(e) =>
                  handleChange("location", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="8940858993"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
                value={form.phone_number || ""}
                maxLength={10}
                inputMode="numeric"
                pattern="[0-9]{10}"
                onChange={(e) =>
                  handleChange(
                    "phone_number",
                    e.target.value.replace(/[^0-9]/g, "")
                  )
                }
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Price Details
            </label>
            <textarea
              rows={3}
              placeholder="₹ 999"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
              value={form.price_details || ""}
              onChange={(e) =>
                handleChange("price_details", e.target.value)
              }
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 px-6 py-4 border-t">
          <Button
            variant="outline"
            onClick={handleClose}
            className="border-[#2F5233] text-[#2F5233] hover:bg-[#2F5233] hover:text-white"
          >
            Cancel
          </Button>
          <Button
            className="bg-[#8B0000] hover:bg-[#6B0000] text-white"
            onClick={handleSave}
          >
            Save Vendor
          </Button>
        </div>
      </div>
    </div>
  );
}