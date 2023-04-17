import HourlyForecast from "./HourlyForecast";
import Card from "./UI/Card";

const hours = [6, 9, 12, 15, 18, 21];

const TodaysForecast = ({ forecastForToday }) => {
  const forecastByHour = forecastForToday.hour.filter((hour) => {
    const date = new Date(hour.time);
    return hours.includes(date.getHours());
  });
  return (
    <Card className="space-y-6">
      <h3 className="text-pale-gray text-sm font-bold uppercase">
        Today's forecast
      </h3>
      <div className="flex">
        {forecastByHour.map((forecast) => (
          <HourlyForecast key={forecast.time} forecast={forecast} />
        ))}
      </div>
    </Card>
  );
};

export default TodaysForecast;
