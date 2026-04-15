import {
  Edit,
  Eye,
  Search,
  Image,
  FileText,
  Globe,
  Plus,
  Upload
} from "lucide-react";

import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { SEOHead } from "../../components/SEOHead";

export function ContentManagement() {

  const [search, setSearch] = useState("");

  const pages = [
    {
      id: 1,
      title: "Home Page",
      status: "Published",
      updated: "2 days ago",
      author: "Admin"
    },
    {
      id: 2,
      title: "Services",
      status: "Published",
      updated: "5 days ago",
      author: "Admin"
    },
    {
      id: 3,
      title: "Gallery",
      status: "Draft",
      updated: "1 day ago",
      author: "Editor"
    },
    {
      id: 4,
      title: "About Us",
      status: "Published",
      updated: "3 days ago",
      author: "Admin"
    },
    {
      id: 5,
      title: "Contact",
      status: "Published",
      updated: "4 days ago",
      author: "Admin"
    }
  ];

  const statusColor = (status: string) => {
    return status === "Published"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";
  };

  return (
    <>
      <SEOHead
        title="Content Management"
        description="Manage website content"
      />

      <div className="p-6 space-y-8">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white p-6 rounded-xl">

          <div>

            <h1 className="text-3xl font-semibold">
              Content Management
            </h1>

            <p className="text-gray-200">
              Manage website pages and media
            </p>

          </div>

          <div className="flex gap-3">

            <Button className="bg-[#FFD700] text-[#8B0000] hover:bg-[#D4AF37]">

              <Plus size={18} className="mr-2" />

              Add Page

            </Button>

            <Button className="bg-white text-[#8B0000]">

              <Upload size={18} className="mr-2" />

              Upload Media

            </Button>

          </div>

        </div>



        {/* CMS Statistics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <Card className="p-5 text-center">
            <Globe className="mx-auto text-[#8B0000]" size={28} />
            <h2 className="text-xl mt-2 font-semibold">5</h2>
            <p className="text-gray-500 text-sm">Total Pages</p>
          </Card>

          <Card className="p-5 text-center">
            <FileText className="mx-auto text-[#8B0000]" size={28} />
            <h2 className="text-xl mt-2 font-semibold">4</h2>
            <p className="text-gray-500 text-sm">Published</p>
          </Card>

          <Card className="p-5 text-center">
            <Image className="mx-auto text-[#8B0000]" size={28} />
            <h2 className="text-xl mt-2 font-semibold">120</h2>
            <p className="text-gray-500 text-sm">Gallery Images</p>
          </Card>

          <Card className="p-5 text-center">
            <FileText className="mx-auto text-[#8B0000]" size={28} />
            <h2 className="text-xl mt-2 font-semibold">1</h2>
            <p className="text-gray-500 text-sm">Draft Pages</p>
          </Card>

        </div>



        {/* Search */}

        <div className="flex items-center gap-3 bg-white p-3 border rounded-lg">

          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search pages..."
            className="outline-none flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>



        {/* Page Table */}

        <Card className="p-6">

          <h2 className="text-xl text-[#8B0000] mb-5">
            Website Pages
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50 border-b">

                <tr className="text-left text-sm text-gray-600">

                  <th className="p-3">Page</th>
                  <th className="p-3">Author</th>
                  <th className="p-3">Last Updated</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>

                </tr>

              </thead>


              <tbody>

                {pages
                  .filter((p) =>
                    p.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((page) => (

                    <tr
                      key={page.id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-3 font-medium text-[#8B0000]">
                        {page.title}
                      </td>

                      <td className="p-3">
                        {page.author}
                      </td>

                      <td className="p-3">
                        {page.updated}
                      </td>

                      <td className="p-3">

                        <span
                          className={`px-3 py-1 text-xs rounded-full ${statusColor(
                            page.status
                          )}`}
                        >
                          {page.status}
                        </span>

                      </td>

                      <td className="p-3 flex gap-4">

                        <Edit
                          className="text-blue-600 cursor-pointer"
                          size={18}
                        />

                        <Eye
                          className="text-green-600 cursor-pointer"
                          size={18}
                        />

                      </td>

                    </tr>

                  ))}

              </tbody>

            </table>

          </div>

        </Card>



        {/* Gallery Manager */}

        <Card className="p-6">

          <h2 className="text-xl text-[#8B0000] mb-4">
            Gallery Manager
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

            {[1,2,3,4,5,6].map((img) => (

              <div
                key={img}
                className="h-28 bg-gray-200 rounded-lg flex items-center justify-center hover:opacity-80 cursor-pointer"
              >

                <Image size={28} className="text-gray-500" />

              </div>

            ))}

          </div>

        </Card>

      </div>
    </>
  );
}