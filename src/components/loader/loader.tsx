import React from "react";
import "./styles.scss";
interface LoaderProps {
  isLoading: boolean;
  customStyle?: React.CSSProperties;
}
const Loader: React.FC<LoaderProps> = ({ isLoading, customStyle }: any) => {
  return (
    isLoading && (
      <div style={customStyle} className="place-loader">
        <span className="loader"></span>
      </div>
    )
  );
};

export default Loader;
