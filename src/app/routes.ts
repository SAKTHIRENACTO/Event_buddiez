import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Public/Home";
import Login from "./pages/Admin/Login";
import { Services } from "./pages/Public/Services";
import { Gallery } from "./pages/Public/Gallery";
import { About } from "./pages/Public/About";
import { Contact } from "./pages/Public/Contact";
import { AdminDashboard } from "./pages/Admin/AdminDashboard";
import { EventManagement } from "./pages/Admin/EventManagement";
import { NotFound } from "./pages/Public/NotFound";
import { VendorManagement } from "./pages/Admin/VendorManagement";
import { TaskAndReportsManagement } from "./pages/Admin/Reports";
import AdminLayout from "./components/AdminLayout";
import { ContentManagement } from "./pages/Admin/ContentManagement";

export const router = createBrowserRouter([
  // AUTH
  {
    path: "/login",
    Component: Login,
  },

  // PUBLIC WEBSITE
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "gallery", Component: Gallery },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },

  // ADMIN PANEL
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "events", Component: EventManagement },
      { path: "vendors", Component: VendorManagement },
      { path: "reports", Component: TaskAndReportsManagement },
      { path: "content", Component: ContentManagement },
    ],
  },

  // 404
  {
    path: "*",
    Component: NotFound,
  },
]);