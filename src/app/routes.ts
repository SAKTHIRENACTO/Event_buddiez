import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Public/Home";
import { Services } from "./pages/Public/Services";
import { Gallery } from "./pages/Public/Gallery";
import { Contact } from "./pages/Public/Contact";
import  VendorRegistration  from "./pages/Public/VendorRegistration";
import { NotFound } from "./pages/Public/NotFound";

export const router = createBrowserRouter([

  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "vendor", Component: VendorRegistration }
    ],
  },



  // 404
  {
    path: "*",
    Component: NotFound,
  },
]);