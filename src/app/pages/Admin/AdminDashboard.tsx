import {
  Calendar,
  Users,
  CheckCircle,
  Clock,
  ClipboardList,
  Plus,
  Bell,
  Activity,
  BookOpen
} from "lucide-react";

import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { SEOHead } from "../../components/SEOHead";

export function AdminDashboard() {

  const stats = [
    { icon: Calendar, label: "Total Events", value: 48 },
    { icon: Clock, label: "Upcoming Events", value: 6 },
    { icon: ClipboardList, label: "Pending Requests", value: 9 },
    { icon: CheckCircle, label: "Confirmed Bookings", value: 32 },
    { icon: Users, label: "Total Vendors", value: 14 },
  ];

  const upcomingEvents = [
    { id: 1, name: "Arun & Divya Wedding", date: "15 Apr 2026", type: "Wedding", location: "Chennai" },
    { id: 2, name: "ABC Product Launch", date: "20 Apr 2026", type: "Corporate", location: "Bangalore" },
    { id: 3, name: "School Annual Day", date: "28 Apr 2026", type: "Educational", location: "Coimbatore" },
    { id: 4, name: "Temple Festival", date: "2 May 2026", type: "Religious", location: "Madurai" },
    { id: 5, name: "Reception Celebration", date: "10 May 2026", type: "Reception", location: "Trichy" },
  ];

  const todos = [
    { id: 1, task: "Confirm catering vendor", date: "Tomorrow" },
    { id: 2, task: "Finalize stage decoration", date: "18 Apr" },
    { id: 3, task: "Call photographer", date: "19 Apr" },
    { id: 4, task: "Send invoice", date: "Today" },
  ];

  const activities = [
    { id: 1, text: "New booking request from Rahul", time: "10 min ago" },
    { id: 2, text: "Vendor 'Elite Decor' added", time: "1 hour ago" },
    { id: 3, text: "Event confirmed: Arun Wedding", time: "3 hours ago" },
    { id: 4, text: "New enquiry received", time: "Yesterday" },
  ];

  const notifications = [
    { id: 1, text: "Wedding event tomorrow", priority: "high" },
    { id: 2, text: "Vendor payment pending", priority: "medium" },
    { id: 3, text: "3 new booking requests", priority: "low" },
  ];

  return (
    <>
      <SEOHead title="Admin Dashboard" description="Event Buddiez Admin Dashboard" />
      <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#f1f5f9] p-6 space-y-10">
        <div className="flex justify-between items-center bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white p-6 rounded-xl shadow-lg">
          <div>
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
            <p className="text-gray-200">
              Manage events, vendors and bookings
            </p>
          </div>
          <div className="relative">
            <Bell size={26} />
            <span className="absolute -top-2 -right-2 bg-[#FFD700] text-[#8B0000] text-xs px-2 rounded-full">
              3
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 flex items-center justify-between cursor-pointer bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#8B0000] hover:scale-[1.02] transition">
            <div>
              <p>Create New</p>
              <h3 className="text-xl font-semibold">Event</h3>
            </div>
            <Plus size={30} />
          </Card>
          <Card className="p-6 flex items-center justify-between cursor-pointer bg-gradient-to-r from-[#2F5233] to-[#1F3822] text-white hover:scale-[1.02] transition">
            <div>
              <p>Add</p>
              <h3 className="text-xl font-semibold">Vendor</h3>
            </div>
            <Users size={30} />
          </Card>
          <Card className="p-6 flex items-center justify-between cursor-pointer bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white hover:scale-[1.02] transition">
            <div>
              <p>View</p>
              <h3 className="text-xl font-semibold">Bookings</h3>
            </div>
            <BookOpen size={30} />
          </Card>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center shadow-md bg-white hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-3">
                <div className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] p-3 rounded-full">
                  <stat.icon className="text-[#8B0000]" size={26} />
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-[#8B0000]">
                {stat.value}
              </h2>
              <p className="text-sm text-gray-500">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-to-b from-white to-[#f9fafb] shadow-md">
            <h2 className="text-xl text-[#8B0000] mb-6 flex items-center gap-2">
              <Calendar size={20} /> Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex justify-between items-center border-l-4 border-[#D4AF37] pl-4 py-2 hover:bg-[#fff8e1] transition rounded"
                >
                  <div>
                    <h3 className="text-[#8B0000] font-medium">
                      {event.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {event.type} • {event.location}
                    </p>
                  </div>
                  <span className="text-sm bg-[#D4AF37] text-[#8B0000] px-3 py-1 rounded-full">
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-b from-white to-[#f9fafb] shadow-md">
            <h2 className="text-xl text-[#8B0000] mb-6 flex items-center gap-2">
              <Clock size={20} /> To-Do Reminders
            </h2>
            <div className="space-y-4">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex justify-between items-center border-l-4 border-[#8B0000] pl-4 py-2 hover:bg-[#fdecec] transition rounded"
                >
                  <span>{todo.task}</span>
                  <span className="text-sm bg-[#8B0000] text-white px-3 py-1 rounded-full">
                    {todo.date}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white hover:opacity-90">
                Add Reminder
              </Button>
            </div>
          </Card>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 shadow-md">
            <h2 className="text-xl text-[#8B0000] mb-6 flex items-center gap-2">
              <Activity size={20} /> Recent Activity
            </h2>
            <div className="space-y-4">
              {activities.map((a) => (
                <div
                  key={a.id}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <span className="text-gray-700">
                    {a.text}
                  </span>
                  <span className="text-sm text-gray-500">
                    {a.time}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6 shadow-md">
            <h2 className="text-xl text-[#8B0000] mb-6">
              Notifications
            </h2>
            <div className="space-y-4">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <span>{n.text}</span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full
                    ${
                      n.priority === "high"
                        ? "bg-red-100 text-red-600"
                        : n.priority === "medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {n.priority}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}