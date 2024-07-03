import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const App = () => {

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user'); // Backend server URL
        console.log(response.data);
      } catch (err) {
        setError(err);
        console.log("no res")
        console.log(err)
      }
    };

    fetchData();
  }, []);

  const location = useLocation();
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
      {location.pathname === "/chatbot"?<></>:
      <Footer />
    
  }
    </div>
  );
};

export default App;
