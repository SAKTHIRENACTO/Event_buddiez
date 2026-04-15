import {
  Plus,
  CheckCircle,
  Clock,
  ClipboardList,
  BarChart3,
  Users,
  DollarSign
} from "lucide-react";

import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { SEOHead } from "../../components/SEOHead";

export function TaskAndReportsManagement() {

  const tasks = [
    {
      id: 1,
      task: "Stage setup for Arun wedding",
      assigned: "Karthik",
      deadline: "14 Apr 2026",
      status: "Pending"
    },
    {
      id: 2,
      task: "Confirm catering vendor",
      assigned: "Priya",
      deadline: "13 Apr 2026",
      status: "Completed"
    },
    {
      id: 3,
      task: "Book photographer",
      assigned: "Rahul",
      deadline: "16 Apr 2026",
      status: "Pending"
    },
    {
      id: 4,
      task: "Decoration arrangement",
      assigned: "Manoj",
      deadline: "18 Apr 2026",
      status: "Pending"
    },
  ];


  const reports = [
    {
      title: "Monthly Revenue",
      value: "₹12,40,000",
      icon: DollarSign
    },
    {
      title: "Total Events This Month",
      value: "18",
      icon: ClipboardList
    },
    {
      title: "Active Vendors",
      value: "14",
      icon: Users
    },
    {
      title: "Pending Tasks",
      value: "7",
      icon: Clock
    }
  ];


  const statusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "";
    }
  };


  return (
    <>
      <SEOHead
        title="Task & Reports Management"
        description="Manage tasks and view business reports"
      />

      <div className="p-6 space-y-10">

        {/* Header */}

        <div className="flex justify-between items-center bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white p-6 rounded-xl">

          <div>
            <h1 className="text-3xl font-semibold">
              Task & Reports Management
            </h1>
            <p className="text-gray-200">
              Manage event tasks and monitor business performance
            </p>
          </div>

          <Button className="bg-[#FFD700] text-[#8B0000] hover:bg-[#D4AF37]">
            <Plus className="mr-2" size={18} />
            Create Task
          </Button>

        </div>



        {/* Reports Section */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {reports.map((report, index) => (

            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg border border-[#D4AF37]/30"
            >

              <div className="flex justify-center mb-3">

                <div className="bg-[#D4AF37] p-3 rounded-full">

                  <report.icon className="text-[#8B0000]" size={24} />

                </div>

              </div>

              <h2 className="text-2xl text-[#8B0000]">
                {report.value}
              </h2>

              <p className="text-gray-500 text-sm">
                {report.title}
              </p>

            </Card>

          ))}

        </div>



        {/* Task Management */}

        <Card className="p-6">

          <h2 className="text-xl text-[#8B0000] mb-6">
            Event Task Management
          </h2>


          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-[#F9FAFB] border-b">

                <tr className="text-left text-sm text-gray-600">

                  <th className="p-3">Task</th>
                  <th className="p-3">Assigned To</th>
                  <th className="p-3">Deadline</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>

                </tr>

              </thead>


              <tbody>

                {tasks.map((task) => (

                  <tr
                    key={task.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-3 font-medium text-[#8B0000]">
                      {task.task}
                    </td>

                    <td className="p-3">
                      {task.assigned}
                    </td>

                    <td className="p-3">
                      {task.deadline}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 text-xs rounded-full ${statusColor(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>

                    </td>

                    <td className="p-3">

                      <Button
                        size="sm"
                        className="bg-[#8B0000] text-white hover:bg-[#6B0000]"
                      >

                        <CheckCircle size={16} className="mr-2" />
                        Mark Complete

                      </Button>

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