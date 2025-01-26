import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  AdminPage,
  LandingPage,
  ItemManagement,
  UserManagement,
  AdminSignin,
  AdminHome,
} from "./pages";

// Actions
import { action as adminLogin } from "./pages/AdminSignin.tsx";

// Loaders
import { loader as userManagementLoader } from "./pages/UserManagement.tsx";
import { loader as itemManagementLoader } from "./pages/ItemManagement.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 5 minutes
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    index: true,
    // errorElement: <Error />,
  },
  { path: "/admin/signin", element: <AdminSignin />, action: adminLogin },
  {
    // path: "/admin",
    element: <AdminPage />,
    children: [
      { path: "/admin", element: <AdminHome />, index: true },
      {
        path: "admin/usermanagement",
        loader: userManagementLoader,
        element: <UserManagement />,
      },
      {
        path: "admin/itemmanagement",
        element: <ItemManagement />,
        loader: itemManagementLoader,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
