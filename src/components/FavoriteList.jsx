import { Fragment, useContext } from "react";
import WeatherContext, { FORECAST_PAGE } from "../store/weather-context";

const FavoriteList = () => {
  const context = useContext(WeatherContext);
  const favoriteItems = context.favoriteList;

  return (
    <Fragment>
      <div className="flex space-x-4 items-center mb-2 xl:mb-4">
        <i className="fa-solid fa-star text-white text-lg xl:text-2xl"></i>
        <h3 className="text-lg text-white xl:text-xl">Favorite List</h3>
      </div>
      {favoriteItems.length === 0 && (
        <p className="text-xl pt-2 text-white">No cities added!</p>
      )}
      {favoriteItems.map((city) => {
        return (
          <div
            className="py-3 border-b border-pale-gray text-white space-y-4 cursor-pointer last:border-b-0 last:pb-0 xl:py-4"
            key={city}
          >
            <div className="flex items-center">
              <span
                className="text-md text-pale-gray transition hover:text-white"
                onClick={() => {
                  context.changeLocation(city);
                  context.changePage(FORECAST_PAGE);
                }}
              >
                {city}
              </span>
              <i
                className="ml-auto fa-solid fa-minus text-white text-2xl transition hover:text-gold"
                onClick={context.removeFromFavoriteList.bind(null, city)}
              ></i>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default FavoriteList;
