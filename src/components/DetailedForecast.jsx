import { useContext, useState } from "react";
import Card from "./UI/Card";
import WeatherContext from "../store/weather-context";
import SingleDetail from "./SingleDetail";

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
          <SingleDetail
            label="Feels like"
            iconClass="fa-solid fa-temperature-low"
            value={`${currentDaysForecast.day.avgtemp_c}°C`}
          />
          <SingleDetail
            label="Chance of rain"
            iconClass="fa-solid fa-droplet"
            value={`${currentDaysForecast.day.daily_chance_of_rain}%`}
          />
          {isMoreDetailsVisible && (
            <SingleDetail
              label="Sunrise"
              iconClass="fa-solid fa-up-long"
              value={currentDaysForecast.astro.sunrise}
            />
          )}
        </div>
        <div className="w-1/2 space-y-4">
          <SingleDetail
            label="Wind"
            iconClass="fa-solid fa-wind"
            value={`${currentDaysForecast.day.maxwind_kph} km/h`}
          />
          <SingleDetail
            label="UV index"
            iconClass="fa-solid fa-sun"
            value={currentDaysForecast.day.uv}
          />
          {isMoreDetailsVisible && (
            <SingleDetail
              label="Sunset"
              iconClass="fa-solid fa-down-long"
              value={currentDaysForecast.astro.sunset}
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default DetailedForecast;
