import { useContext } from "react";
import SingleDayForecast from "./SingleDayForecast";
import Card from "./UI/Card";
import WeatherContext from "../store/weather-context";

const WeeklyForecast = () => {
  const context = useContext(WeatherContext);
  const days = context.forecast.forecast.forecastday;

  return (
    <Card className="w-full h-full !pb-2 xl:w-1/3">
      <h3 className="text-pale-gray text-sm font-bold uppercase">
        3-Day forecast
      </h3>
      <div className="flex flex-col">
        {days.map((forecast) => (
          <SingleDayForecast key={forecast.date} forecast={forecast} />
        ))}
      </div>
    </Card>
  );
};

export default WeeklyForecast;
