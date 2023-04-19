import { useContext } from "react";
import SingleDayForecast from "./SingleDayForecast";
import Card from "./UI/Card";
import WeatherContext from "../store/weather-context";

const WeeklyForecast = () => {
  const context = useContext(WeatherContext);
  const days = context.forecast.forecast.forecastday;

  return (
    <Card className="w-1/3 h-full pb-3">
      <h3 className="text-pale-gray text-sm font-bold uppercase">
        7-Day forecast
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
