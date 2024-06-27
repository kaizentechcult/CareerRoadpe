import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
