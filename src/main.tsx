import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// Routing
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
// React Query
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/queryClient.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
