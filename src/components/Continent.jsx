import { useContext, useState } from "react";
import Animation from "./UI/Animation";
import WeatherContext, {
  FORECAST_PAGE,
  isInFavoriteList,
} from "../store/weather-context";

const Continent = ({ cities, label, labelIcon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [keyword, setKeyword] = useState("");
  const context = useContext(WeatherContext);
  const filteredCities = cities.filter((city) => {
    return city.toLowerCase().includes(keyword.trim().toLowerCase());
  });

  return (
    <div className="border-b border-white pb-3 last:border-0 last:pb-0 xl:pb-4">
      <div className="space-y-4 xl:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 items-center">
            <i className={`${labelIcon} text-white text-lg xl:text-2xl`}></i>
            <h3 className="text-lg text-white xl:text-xl">
              {label}
              <span className="ml-2 text-sm">({cities.length} Cities)</span>
            </h3>
          </div>
          <i
            className={`fa-solid fa-chevron-up text-xl text-white cursor-pointer transition ${
              isVisible ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => {
              setIsVisible((oldState) => !oldState);
            }}
          ></i>
        </div>
      </div>
      <Animation animationClass="slide-down" isVisible={isVisible}>
        <div className="mt-3 xl:mt-5">
          <div className="relative w-full sm:w-[200px] lg:w-2/5 xl:w-1/4">
            <i className="absolute left-3 top-2.5 fa-solid fa-magnifying-glass text-white"></i>
            <input
              className="w-full bg-darkish-blue border border-white rounded-lg p-2 text-sm text-white focus:outline-none pl-10"
              type="text"
              placeholder="Search for city..."
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
          </div>
          {filteredCities.length === 0 && (
            <p className="pt-4 pb-1 text-white text-center font-medium text-lg xl:text-xl xl:pt-6 xl:pb-2">
              No Cities Found
            </p>
          )}
          {filteredCities.map((city) => {
            return (
              <div
                className="border-b border-pale-gray py-3 flex items-center justify-between last:border-0 last:pb-0 xl:py-4"
                key={city}
              >
                <p
                  className="text-md text-pale-gray transition cursor-pointer hover:text-white"
                  onClick={() => {
                    context.changeLocation(city);
                    context.changePage(FORECAST_PAGE);
                  }}
                >
                  {city}
                </p>
                {isInFavoriteList(context.favoriteList, city) ? (
                  <i
                    className="fa-solid fa-star text-gold text-lg transition cursor-pointer hover:text-pale-gray xl:text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      context.removeFromFavoriteList(city);
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-star text-lg text-pale-gray transition cursor-pointer hover:text-gold xl:text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      context.addToFavoriteList(city);
                    }}
                  ></i>
                )}
              </div>
            );
          })}
        </div>
      </Animation>
    </div>
  );
};
export default Continent;
