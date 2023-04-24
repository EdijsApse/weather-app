import { useContext } from "react";
import WeatherContext from "../store/weather-context";

const CurrentForecast = () => {
  const context = useContext(WeatherContext);
  const forecast = context.forecast;
  const image = forecast.current.condition.icon.replace(
    /[0-9]+x[0-9]+/,
    "128x128"
  );

  return (
    <div className="flex justify-between items-center px-12">
      <div className="flex flex-col justify-between space-y-12">
        <div className="text-white space-y-2">
          <h2 className="text-4xl font-medium lg:text-5xl">
            {forecast.location.name}
          </h2>
          <h3 className="text-md lg:text-2xl">{forecast.location.country}</h3>
        </div>
        <p className="text-4xl font-bold text-white lg:text-7xl">{`${forecast.current.temp_c}°C`}</p>
      </div>
      <img src={`https:${image}`} />
    </div>
  );
};

export default CurrentForecast;
