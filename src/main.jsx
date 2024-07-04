import React from "react";
// import axios from "axios";
import ReactDOM from "react-dom/client";
import articles from "./assets/articles.js";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import App from "./App";
import FieldMenu from "./pages/FieldMenu/FieldMenu";
import SignIn from "./pages/Signin/SignIn";
import SignUp from "./pages/Signup/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import Testing from "./pages/Testing/testing";
import MentorPage from "./pages/MentorPage/MentorPage";
import Scholarships from "./pages/Scholarships/Scholarships";
import ChatBot from "./components/ChatBot/ChatBot";
import HiveSignIn from "./pages/HiveSignIn/HiveSignIn";
import ArticleSection from "./pages/ArticleSection/ArticleSection";
import "./index.css";
import Article from "./pages/Article/Article.jsx";

// useEffect(() => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/fields" replace />} />
      <Route path="fields" element={<FieldMenu />} />
      {/* <Route path="roadmap/:id" element={<Roadmap data={initData} />} /> */}
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="chatbot" element={<ChatBot />} />
      <Route path="mentor" element={<MentorPage />} />
      <Route path="scholar" element={<Scholarships />} />
      <Route path="testing" element={<Testing />} />
      <Route path="hivesign" element={<HiveSignIn />} />
      <Route path="articles" element={<ArticleSection />} />
      <Route path="articles/:id" element={<Article data={articles} />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
