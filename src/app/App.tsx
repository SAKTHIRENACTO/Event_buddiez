import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { router } from "./routes";
import { authAPI } from "../api/auth.api";
import { useEffect, useState } from "react";

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}


