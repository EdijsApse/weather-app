import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

export const FORECAST_PAGE = "FORECAST_PAGE";
export const CITIES_PAGE = "CITIES_PAGE";

const WeatherContext = React.createContext({
  selectedPage: FORECAST_PAGE,
  changePage: (page) => {},
  changeLocation: (location) => {},
  isForecastLoading: false,
  forecast: null,
  currentDaysForecast: null,
  location: "",
});

export const WeatherContextProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState(FORECAST_PAGE);
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState(null);
  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const currentDaysForecast = forecast
    ? forecast.forecast.forecastday[0]
    : null;
  const searchForecast = useCallback(() => {
    if (!location) {
      return;
    }
    setIsForecastLoading(true);
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
          setIsForecastLoading(false);
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
    searchForecast();
  }, [searchForecast]);

  return (
    <WeatherContext.Provider
      value={{
        selectedPage: selectedPage,
        location: location,
        isForecastLoading: isForecastLoading,
        forecast: forecast,
        currentDaysForecast: currentDaysForecast,
        changePage: (page) => {
          setSelectedPage(page);
        },
        changeLocation: (location) => {
          setLocation(location);
        },
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
