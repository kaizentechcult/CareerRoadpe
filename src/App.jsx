import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
