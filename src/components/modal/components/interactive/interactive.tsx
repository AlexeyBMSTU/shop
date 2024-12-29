import React from "react";
import "./styles.scss";

const Description = () => {
  return (
    <div className="modal__description">
      <div className="text__description">
        <h6 style={{ margin: 0 }}>Был как-то раз в этом месте. Понравилось!</h6>
      </div>
    </div>
  );
};
const Comments = () => {
  return (
    <div className="place__comments">
      <div className="place__comment">
        <div className="place__comment-author">
          <div className="place__comment-author-avatar">
            <img
              className="author-avatar"
              src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?t=st=1735399991~exp=1735403591~hmac=8cd7eaac7bd108743443945a3285355c1217476a12ec316e390b8b80fcb5e480&w=1380"
            ></img>
          </div>
          <div className="place__comment-author-username">Alexey</div>
        </div>
        <div className="place__comment-description">Крутая картинка</div>
      </div>
    </div>
  );
};
const Interactive = () => {
  return (
    <div className="place__interactive">
      <Description />
      <Comments />
    </div>
  );
};

export default Interactive;
