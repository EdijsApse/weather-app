import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

export const FORECAST_PAGE = "FORECAST_PAGE";
export const CITIES_PAGE = "CITIES_PAGE";
const STORAGE_KEY = "favorite_list";

export const isInFavoriteList = (list, item) => {
  return list.findIndex((listItem) => listItem === item) !== -1;
};

const WeatherContext = React.createContext({
  selectedPage: FORECAST_PAGE,
  changePage: (page) => {},
  changeLocation: (location) => {},
  addToFavoriteList: (nameOfCity) => {},
  removeFromFavoriteList: (nameOfCity) => {},
  isForecastLoading: false,
  forecast: null,
  currentDaysForecast: null,
  location: "",
  favoriteList: [],
});

export const WeatherContextProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState(FORECAST_PAGE);
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState(null);
  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

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

  const addToFavoriteList = (nameOfCity) => {
    setFavoriteList((oldState) => {
      const newList = [...oldState, nameOfCity];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
      return newList;
    });
  };

  const removeFromFavoriteList = (nameOfCity) => {
    setFavoriteList((oldState) => {
      const newList = oldState.filter((city) => city !== nameOfCity);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
      return newList;
    });
  };

  useEffect(() => {
    const geolocation = navigator.geolocation;
    const favoriteItems = localStorage.getItem(STORAGE_KEY);

    if (geolocation) {
      geolocation.getCurrentPosition((position) => {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }

    if (favoriteItems) {
      setFavoriteList(JSON.parse(favoriteItems));
    }
  }, [setFavoriteList]);

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
        favoriteList: favoriteList,
        changePage: (page) => {
          setSelectedPage(page);
        },
        changeLocation: (location) => {
          setLocation(location);
        },
        addToFavoriteList: addToFavoriteList,
        removeFromFavoriteList: removeFromFavoriteList,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
