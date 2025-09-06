import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function Baselayout() {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
