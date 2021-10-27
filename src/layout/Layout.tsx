import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
