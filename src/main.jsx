import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import App from "./App.jsx";
import Fields from "./pages/fields menu/fields";
import Roadmap from "./pages/roadmap/roadmap";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="fields" element={<Fields />} />
      <Route path="roadmap" element={<Roadmap />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="" element={<Navigate to="/fields" replace />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
