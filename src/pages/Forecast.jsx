import CurrentForecast from "../components/CurrentForecast";
import DetailedForecast from "../components/DetailedForecast";
import ForecastSearch from "../components/ForecastSearch";
import TodaysForecast from "../components/TodaysForecast";
import Animation from "../components/UI/Animation";
import Spinner from "../components/UI/Spinner";
import WeeklyForecast from "../components/WeeklyForecast";
import { useContext } from "react";
import WeatherContext from "../store/weather-context";

const Forecast = () => {
  const context = useContext(WeatherContext);
  const forecast = context.forecast;
  const isLoading = context.isForecastLoading;

  return (
    <div className="w-full space-y-6 lg:space-y-8">
      <ForecastSearch />
      <Animation isVisible={isLoading}>
        <div className="w-full xl:w-2/3 relative">
          <div className="absolute top-0 left-0 w-full">
            <Spinner large={true} />
          </div>
        </div>
      </Animation>
      {!forecast && !isLoading && (
        <div className="w-full xl:w-2/3">
          <h1 className="text-white text-center text-2xl py-4">
            No forecast found for this location
          </h1>
        </div>
      )}
      {forecast && (
        <Animation isVisible={!isLoading}>
          <div className="flex flex-col w-full space-y-6 xl:space-x-8 xl:space-y-0 xl:flex-row">
            <div className="w-full space-y-6 xl:space-y-8 xl:w-2/3">
              <CurrentForecast />
              <TodaysForecast />
              <DetailedForecast />
            </div>
            <WeeklyForecast />
          </div>
        </Animation>
      )}
    </div>
  );
};

export default Forecast;
