import { Plus, Edit, Trash2, CheckCircle, XCircle, Calendar } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { SEOHead } from "../../components/SEOHead";
import { eventAPI } from "../../../api/event.api";
import { useEffect, useState } from "react";
import { Event } from "../../../types/event.types";

export function EventManagement() {
  const [events, setEvents] = useState<Event[]>([])
  const [modalOpen, setModalOpen] = useState(false)

   const loadEvents = async () => {
      const data = await eventAPI.getEvents()
      setEvents(data)
    }
    useEffect(() => {
      loadEvents()
    }, [])

  // const events = [
  //   {
  //     id: 1,
  //     name: "Arun Wedding",
  //     type: "Wedding",
  //     location: "Chennai",
  //     date: "15 Apr 2026",
  //     client: "Arun Kumar",
  //     package: "Premium",
  //     price: "₹3,50,000"
  //   },
  //   {
  //     id: 2,
  //     name: "ABC Product Launch",
  //     type: "Corporate",
  //     location: "Bangalore",
  //     date: "20 Apr 2026",
  //     client: "ABC Pvt Ltd",
  //     package: "Corporate Pro",
  //     price: "₹2,00,000"
  //   },
  //   {
  //     id: 3,
  //     name: "Birthday Celebration",
  //     type: "Birthday",
  //     location: "Coimbatore",
  //     date: "25 Apr 2026",
  //     client: "Ravi",
  //     package: "Basic",
  //     price: "₹80,000"
  //   },
  // ];


  const bookings = [
    {
      id: 1,
      client: "Rahul",
      event: "Wedding",
      date: "18 Apr 2026",
      vendor: "Elite Decor",
      payment: "Paid",
      status: "Approved"
    },
    {
      id: 2,
      client: "Suresh",
      event: "Birthday",
      date: "22 Apr 2026",
      vendor: "Pending",
      payment: "Pending",
      status: "Pending"
    },
    {
      id: 3,
      client: "Anitha",
      event: "Corporate",
      date: "30 Apr 2026",
      vendor: "SoundCraft",
      payment: "Paid",
      status: "Completed"
    },
  ];

  const statusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      default:
        return "";
    }
  };

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
              Event & Booking Management
            </h1>
            <p className="text-gray-200">
              Manage events, bookings, vendors and payments
            </p>
          </div>
          <Button className="bg-[#FFD700] text-[#8B0000] hover:bg-[#D4AF37]">
            <Plus className="mr-2" size={18} />
            Create Event
          </Button>
        </div>
        <Card className="p-6 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-[#8B0000] font-semibold">
              Event Management
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F9FAFB] border-b">
                <tr className="text-left text-sm text-gray-600">
                  <th className="p-3">Event Name</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Package</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr
                    key={event.event_id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium text-[#8B0000]">
                      {event.customer_name}
                    </td>
                    <td className="p-3">{event.event_type}</td>
                    <td className="p-3">{event.location}</td>
                    <td className="p-3">{event.event_date}</td>
                    <td className="p-3">{event.venue}</td>
                    <td className="p-3">{event.total_price}</td>
                    <td className="p-3">{event.advance_payment}</td>
                    <td className="p-3 flex gap-3">
                      <Edit
                        className="text-blue-600 cursor-pointer"
                        size={18}
                      />
                      <Trash2
                        className="text-red-600 cursor-pointer"
                        size={18}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card className="p-6 shadow-md">
          <h2 className="text-xl text-[#8B0000] font-semibold mb-6">
            Booking Management
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F9FAFB] border-b">
                <tr className="text-left text-sm text-gray-600">
                  <th className="p-3">Client</th>
                  <th className="p-3">Event</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Vendor</th>
                  <th className="p-3">Payment</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium">
                      {booking.client}
                    </td>
                    <td className="p-3">
                      {booking.event}
                    </td>
                    <td className="p-3">
                      {booking.date}
                    </td>
                    <td className="p-3">
                      {booking.vendor}
                    </td>
                    <td className="p-3">
                      {booking.payment}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${statusColor(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-3">
                      <CheckCircle
                        className="text-green-600 cursor-pointer"
                        size={18}
                      />
                      <XCircle
                        className="text-red-600 cursor-pointer"
                        size={18}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}