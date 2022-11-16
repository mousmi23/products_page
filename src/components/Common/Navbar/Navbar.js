import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand">@Fashion Mart@</a>
        <div className="d-flex ">
          <div className="mx-5 my-2" style={{ color: "White" }}>
            Products
          </div>
          <div className="btn btn-outline-primary my-2 my-sm-0">
            <ShoppingCartIcon />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
