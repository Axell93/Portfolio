import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Home } from "./pages/home.tsx";
import { About } from "./pages/about.tsx";
import { Work } from "./pages/work.tsx";
import { Contact } from "./pages/contact.tsx";
import "./index.css";
import { ThemeProvider } from "./lib/theme-context.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/work",
        element: <Work />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
