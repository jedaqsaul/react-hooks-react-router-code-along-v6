import React from "react";
import ReactDOM from "react-dom/client";
// step 1. Import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
