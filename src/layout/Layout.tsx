import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./style.css";

const Layout: React.FC<{}> = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
