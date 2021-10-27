import React from "react";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <nav id="head">
       <div className="logo">
        <h1>Movies On The Train Menu</h1>
      </div>
      <span>
        <Link to={"/create"} className="nav-link">
          <button>
            <div className="nav-link">Create</div>
          </button>
        </Link>
      </span>
     
    </nav>
  );
};

export default Header;
