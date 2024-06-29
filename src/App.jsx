import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const App = () => {
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
