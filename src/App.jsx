// import { useState, useEffect } from "react";
// import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const App = () => {
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios("https://careerroadpe.onrender.com/");
  //       // const response = await axios("https://localhost:8080/");
  //       console.log(response.data);

  //       return response;
  //     } catch (err) {
  //       setError(err);
  //       setError(err);
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const location = useLocation();
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
      {location.pathname === "/chatbot" ? <></> : <Footer />}
    </div>
  );
};

export default App;
