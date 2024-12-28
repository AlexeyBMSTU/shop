import React from "react";
import "./styles.scss";
import Navbar from "../navbar/navbar";
import Collage from "../collage/collage";
import { useNavigate } from "react-router-dom";

const Wellcome = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/auth");
  };

  return (
    <div className="welcome">
      <Navbar />
      <Collage />
      <form className="welcome__form">
        <h1 className="welcome__message">Диван мечты всегда мягче!</h1>
        <button
          type="button"
          onClick={handleButtonClick}
          className="welcome__button welcome__button-state"
        >
          К покупкам!
        </button>
      </form>
    </div>
  );
};

export default Wellcome;
