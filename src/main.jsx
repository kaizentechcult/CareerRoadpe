import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  // Navigate,
} from "react-router-dom";

// import App from "./App.jsx";
// import Fields from "./pages/FieldMenu/FieldMenu.jsx";
// import Roadmap from "./pages/Roadmap/Roadmap.jsx";
// import Signin from "./pages/signin/Signin.jsx";
// import Signup from "./pages/signup/SignUp.jsx";
// import NotFound from './components/NotFound';
import App from "./App"
import Fields from "./pages/FieldMenu/FieldMenu"
import Roadmap from "./pages/Roadmap/Roadmap"
import SignIn from "./pages/Signin/SignIn"
import SignUp from "./pages/Signup/SignUp"

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Fields />} />
      <Route path="fields" element={<Fields />} />
      <Route path="roadmap" element={<Roadmap />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
