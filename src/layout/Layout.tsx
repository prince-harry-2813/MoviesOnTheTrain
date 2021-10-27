import React from "react";
import Header from "./Header";
import "./style.css";

const Layout: React.FC<{}> = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};
export default Layout;
