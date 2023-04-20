import { Fragment } from "react";

const FavoriteList = () => {
  return (
    <Fragment>
      <div className="flex space-x-4 items-center">
        <i className="fa-solid fa-star text-white text-2xl "></i>
        <h3 className="text-xl text-white">
          Favorite List
          <span className="ml-2 text-sm">(0 Cities)</span>
        </h3>
      </div>
    </Fragment>
  );
};

export default FavoriteList;
