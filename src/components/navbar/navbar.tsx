import React from "react";
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__home-referens navbar__effects">
        <h2>Домашняя страница</h2>
      </div>
      <div className="navbar__shop-referens navbar__effects">
        <h2>Магазин</h2>
      </div>
      <div className="navbar__auth-referens navbar__effects">
        <h2>Авторизация</h2>
      </div>
    </nav>
  );
};

export default Navbar;
