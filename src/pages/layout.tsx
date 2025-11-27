import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Layout = () => {
  return <div>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </div>;
}   
export default Layout