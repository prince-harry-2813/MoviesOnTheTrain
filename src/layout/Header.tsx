import React from "react";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <nav id="head">
        <span>
          <button>
            <Link to={"/create"} className="nav-link">
              <div className="nav-link">Create</div>
            </Link>
          </button>
        </span>
        <span className="logo">
          <span>Movie - Rail Menu</span>
        </span>
    </nav>
  );
};

export default Header;
