import { useContext, useState } from "react";
import Card from "./UI/Card";
import WeatherContext from "../store/weather-context";

const DetailedForecast = () => {
  const context = useContext(WeatherContext);
  const currentDaysForecast = context.currentDaysForecast;
  const [isMoreDetailsVisible, setIsMoreDetailsVisible] = useState(false);

  return (
    <Card className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-pale-gray text-sm font-bold uppercase">
          Air condition
        </h3>
        <button
          className="bg-cloud-blue text-white px-4 py-1 rounded-full font-lg"
          onClick={() => {
            setIsMoreDetailsVisible((oldState) => {
              return !oldState;
            });
          }}
        >
          {isMoreDetailsVisible ? "See less" : "See more"}
        </button>
      </div>
      <div className="flex">
        <div className="w-1/2 space-y-4">
          <div>
            <div className="flex text-pale-gray items-center">
              <div className="w-10 text-xl">
                <i className="fa-solid fa-temperature-low"></i>
              </div>
              <h2 className="text-md font-medium">Real feel</h2>
            </div>
            <h3 className="relative left-10 text-2xl font-bold text-white">
              {`${currentDaysForecast.day.avgtemp_c}°C`}
            </h3>
          </div>
          <div>
            <div className="flex text-pale-gray items-center">
              <div className="w-10 text-xl">
                <i className="fa-solid fa-droplet"></i>
              </div>
              <h2 className="text-md font-medium">Chance of rain</h2>
            </div>
            <h3 className="relative left-10 text-2xl font-bold text-white">
              {`${currentDaysForecast.day.daily_chance_of_rain}%`}
            </h3>
          </div>
          {isMoreDetailsVisible && (
            <div>
              <div className="flex text-pale-gray items-center">
                <div className="w-10 text-xl">
                  <i className="fa-solid fa-up-long"></i>
                </div>
                <h2 className="text-md font-medium">Sunrise</h2>
              </div>
              <h3 className="relative left-10 text-2xl font-bold text-white">
                {currentDaysForecast.astro.sunrise}
              </h3>
            </div>
          )}
        </div>
        <div className="w-1/2 space-y-4">
          <div>
            <div className="flex text-pale-gray items-center">
              <div className="w-10 text-xl">
                <i className="fa-solid fa-wind"></i>
              </div>
              <h2 className="text-md font-medium">Wind</h2>
            </div>
            <h3 className="relative left-10 text-2xl font-bold text-white">
              {currentDaysForecast.day.maxwind_kph} km/h
            </h3>
          </div>
          <div>
            <div className="flex text-pale-gray items-center">
              <div className="w-10 text-xl">
                <i className="fa-solid fa-sun"></i>
              </div>
              <h2 className="text-md font-medium">UV index</h2>
            </div>
            <h3 className="relative left-10 text-2xl font-bold text-white">
              {currentDaysForecast.day.uv}
            </h3>
          </div>
          {isMoreDetailsVisible && (
            <div>
              <div className="flex text-pale-gray items-center">
                <div className="w-10 text-xl">
                  <i className="fa-solid fa-down-long"></i>
                </div>
                <h2 className="text-md font-medium">Sunset</h2>
              </div>
              <h3 className="relative left-10 text-2xl font-bold text-white">
                {currentDaysForecast.astro.sunset}
              </h3>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default DetailedForecast;
