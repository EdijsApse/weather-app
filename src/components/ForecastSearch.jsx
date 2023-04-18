import { useCallback, useEffect, useState } from "react";
import Card from "./UI/Card";
import axios from "axios";
import Spinner from "./UI/Spinner";
import Fade from "./UI/FadeAnimation";

const ForecastSearch = ({ onCitySelectHandler }) => {
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
    onCitySelectHandler(`${city.lat},${city.lon}`);
  };

  return (
    <div className="relative w-2/3 pr-5">
      <input
        className="w-full bg-darkish-blue rounded-lg p-4 text-white focus:outline-none"
        type="text"
        placeholder="Search for city..."
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={keyword}
      />
      <Fade isVisible={isValidSearchParam}>
        <div className="absolute top-full pr-5 left-0 w-full z-10">
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
                  <span className="text-lg">{city.name} </span>
                  <span className="text-pale-gray font-medium text-sm">
                    - {city.country}
                  </span>
                </div>
              ))
            )}
          </Card>
        </div>
      </Fade>
    </div>
  );
};

export default ForecastSearch;
