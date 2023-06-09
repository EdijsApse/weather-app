import { useCallback, useContext, useEffect, useState } from "react";
import Card from "./UI/Card";
import axios from "axios";
import Spinner from "./UI/Spinner";
import Animation from "./UI/Animation";
import WeatherContext, { isInFavoriteList } from "../store/weather-context";

const ForecastSearch = () => {
  const context = useContext(WeatherContext);
  const [cities, setCities] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isValidSearchParam = keyword.trim().length >= 3;

  const citySearch = useCallback(() => {
    setIsLoading(true);
    axios
      .get(
        `${import.meta.env.VITE_WEATHER_API_URL}/search.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${keyword.trim()}`
      )
      .then((response) => {
        const listOfCities = response.data;
        setCities(listOfCities);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, [keyword, setCities, setIsLoading]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      if (isValidSearchParam) {
        citySearch();
      } else {
        setCities([]);
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
      setIsLoading(false);
    };
  }, [keyword, citySearch, setCities]);

  const citySelectHandler = (city) => {
    setKeyword("");
    context.changeLocation(`${city.lat},${city.lon}`);
  };

  return (
    <div className="relative w-full xl:w-2/3 xl:pr-5">
      <input
        className="w-full bg-darkish-blue rounded-lg py-3 p-4 text-white focus:outline-none xl:py-4"
        type="text"
        placeholder="Search for city..."
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={keyword}
      />
      <Animation isVisible={isValidSearchParam}>
        <div className="absolute top-full left-0 w-full z-10 xl:pr-5">
          <Card className="rounded-lg !p-2 mt-2 max-h-40 overflow-auto">
            {isLoading ? (
              <Spinner />
            ) : cities.length === 0 ? (
              <p className="text-center text-white text-xl font-medium py-4">
                No cities found
              </p>
            ) : (
              cities.map((city) => (
                <div
                  className="px-4 py-2 border-b-2 border-dark-cloud-blue text-white last:border-b-0 cursor-pointer hover:bg-dark-cloud-blue transition"
                  key={city.id}
                  onClick={citySelectHandler.bind(null, city)}
                >
                  <div className="flex items-center">
                    <span className="text-lg">{city.name} </span>
                    <span className="relative text-pale-gray font-medium text-sm top-[2px] left-1">
                      - {city.country}
                    </span>
                    {isInFavoriteList(context.favoriteList, city.name) ? (
                      <i
                        className="ml-auto fa-solid fa-star text-gold text-2xl transition hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          context.removeFromFavoriteList(city.name);
                        }}
                      ></i>
                    ) : (
                      <i
                        className="ml-auto fa-solid fa-star text-white text-2xl transition hover:text-gold"
                        onClick={(e) => {
                          e.stopPropagation();
                          context.addToFavoriteList(city.name);
                        }}
                      ></i>
                    )}
                  </div>
                </div>
              ))
            )}
          </Card>
        </div>
      </Animation>
    </div>
  );
};

export default ForecastSearch;
