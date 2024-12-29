import React from "react";
import "./styles.scss";

const Loader = ({ isLoading }: any) => {
  return (
    isLoading && (
      <div className="place-loader">
        <span className="loader"></span>
      </div>
    )
  );
};

export default Loader;
