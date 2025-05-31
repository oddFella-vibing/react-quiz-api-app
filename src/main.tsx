import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import MainLayout from "./layout/MainLayout.tsx";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayout>
      
      <RouterProvider router={router}/>

      
    </MainLayout>
  </StrictMode>
);
