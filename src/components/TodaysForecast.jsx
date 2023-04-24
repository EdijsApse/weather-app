import { useContext } from "react";
import HourlyForecast from "./HourlyForecast";
import Card from "./UI/Card";
import WeatherContext from "../store/weather-context";

const hours = [6, 9, 12, 15, 18, 21];

const TodaysForecast = () => {
  const context = useContext(WeatherContext);
  const forecastByHour = context.currentDaysForecast.hour.filter((hour) => {
    const date = new Date(hour.time);
    return hours.includes(date.getHours());
  });
  return (
    <Card className="space-y-6 pb-0 md:pb-8">
      <h3 className="text-pale-gray text-sm font-bold uppercase">
        Today's forecast
      </h3>
      <div className="flex flex-col md:flex-row">
        {forecastByHour.map((forecast) => (
          <HourlyForecast key={forecast.time} forecast={forecast} />
        ))}
      </div>
    </Card>
  );
};

export default TodaysForecast;
