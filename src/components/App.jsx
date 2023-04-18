import Sidebar from "./Sidebar";
import CurrentForecast from "./CurrentForecast";
import TodaysForecast from "./TodaysForecast";
import DetailedForecast from "./DetailedForecast";
import WeeklyForecast from "./WeeklyForecast";
import ForecastSearch from "./ForecastSearch";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Fade from "./UI/FadeAnimation";
import Spinner from "./UI/Spinner";

const App = () => {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const searchForecast = useCallback(() => {
    setIsLoading(true);
    setForecast(null);
    axios
      .get(
        `${import.meta.env.VITE_WEATHER_API_URL}/forecast.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${location}&days=7&aqi=no&alerts=no`
      )
      .then((response) => {
        const { data } = response;
        setForecast(data);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, [location]);

  useEffect(() => {
    const geolocation = navigator.geolocation;
    if (geolocation) {
      geolocation.getCurrentPosition((position) => {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }
  }, []);

  useEffect(() => {
    if (location) {
      searchForecast();
    }
  }, [searchForecast, location]);

  const forecastForToday = forecast ? forecast.forecast.forecastday[0] : null;

  return (
    <div className="container flex mx-auto space-x-8 py-16">
      <Sidebar />
      <div className="w-full space-y-8">
        <ForecastSearch
          onCitySelectHandler={(cityGeoLocation) => {
            setLocation(cityGeoLocation);
          }}
        />
        <Fade isVisible={isLoading}>
          <div className="w-2/3 relative">
            <div className="absolute top-0 left-0 w-full">
              <Spinner large={true} />
            </div>
          </div>
        </Fade>
        {!forecast && !isLoading && (
          <div className="w-2/3">
            <h1 className="text-white text-center text-2xl py-4">
              No forecast found for this location
            </h1>
          </div>
        )}
        {forecast && (
          <Fade isVisible={!isLoading}>
            <div className="flex space-x-8 w-full">
              <div className="w-2/3 space-y-8">
                <CurrentForecast
                  cityName={forecast.location.name}
                  chanceOfRain={forecastForToday.day.daily_chance_of_rain}
                  currentTemp={forecast.current.temp_c}
                  iconLink={forecast.current.condition.icon}
                />
                <TodaysForecast forecastForToday={forecastForToday} />
                <DetailedForecast forecastForToday={forecastForToday} />
              </div>
              <WeeklyForecast days={forecast.forecast.forecastday} />
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default App;
