import React from "react";
import "./styles.scss";

const Collage = () => {
  return (
    <div className="container">
      <div className="block_img">
        <div className="img_box box1">
          <img
            src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?t=st=1735399991~exp=1735403591~hmac=8cd7eaac7bd108743443945a3285355c1217476a12ec316e390b8b80fcb5e480&w=1380"
            alt=""
          />
        </div>
        <div className="img_box box2">
          <img
            src="https://img.freepik.com/free-photo/late-april-through-early-may-tulip-fields-netherlands-colourfully-burst-into-full-bloom-fortunately-there-are-hundreds-flower-fields-dotted-dutch-countryside-which_181624-33612.jpg?t=st=1735401166~exp=1735404766~hmac=4c10d0e4fac63d9456f33659558f85a535d703b1b22c42e663b93865c5ac50e6&w=1380"
            alt=""
          />
        </div>
        <div className="img_box box3">
          <img
            src="https://img.freepik.com/free-photo/beautiful-selective-focus-shot-crystal-ball-reflecting-breathtaking-sunset_181624-8579.jpg?t=st=1735401184~exp=1735404784~hmac=957f3c3ee1dc8873ee0c633a4ad80093d8228bea1170f0eae6a0afb9fb85d677&w=1380"
            alt=""
          />
        </div>
        <div className="img_box box4">
          <img
            src="https://img.freepik.com/premium-photo/serene-swan-gracefully-glided-calm-waters-lake-trampeau-sweden-reflecting-off-its-pe_1120824-2314.jpg?w=1380"
            alt=""
          />
        </div>
        <div className="img_box box5">
          <img
            src="https://img.freepik.com/free-photo/blooming-flowers-sunset_1161-80.jpg?t=st=1735401282~exp=1735404882~hmac=ebd19ecdb04ab138e68ff7a9623549b0165887b3d20ca2f2e0d25e6b247979f4&w=1380"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Collage;
