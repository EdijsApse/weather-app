import { useContext, useState } from "react";
import Animation from "./UI/Animation";
import WeatherContext, { FORECAST_PAGE } from "../store/weather-context";

const Continent = ({ cities, label, labelIcon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [keyword, setKeyword] = useState("");
  const context = useContext(WeatherContext);
  const filteredCities = cities.filter((city) => {
    return city.toLowerCase().includes(keyword.trim().toLowerCase());
  });

  return (
    <div className="border-b border-white pb-4 last:border-0 last:pb-0">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 items-center">
            <i className={`${labelIcon} text-white text-2xl`}></i>
            <h3 className="text-xl text-white">
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
        <div className="mt-5">
          <div className="relative w-1/4">
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
            <p className="pt-6 pb-2 text-xl text-white text-center font-medium">
              No Cities Found
            </p>
          )}
          {filteredCities.map((city) => {
            return (
              <div
                className="border-b border-pale-gray py-4 flex items-center justify-between last:border-0 last:pb-0"
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
                <i className="fa-solid fa-star text-2xl text-pale-gray transition cursor-pointer hover:text-gold"></i>
              </div>
            );
          })}
        </div>
      </Animation>
    </div>
  );
};
export default Continent;
