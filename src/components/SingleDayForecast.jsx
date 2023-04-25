import { Fragment, useState } from "react";
import Animation from "./UI/Animation";

const hours = [6, 9, 12, 15, 18, 21];

const SingleDayForecast = ({ forecast }) => {
  const date = new Date(forecast.date);
  const today = new Date();
  const [isHourlyForecastVisible, setIsHourlyForecastVisible] = useState(false);

  const forecastByHour = forecast.hour.filter((hour) => {
    const date = new Date(hour.time);
    return hours.includes(date.getHours());
  });

  return (
    <div className="border-b border-dark-cloud-blue last:border-b-0 first:mt-4">
      <div className="flex items-center py-3 transition">
        <img src={forecast.day.condition.icon} className="w-10 mr-4" />
        <h4 className="font-lg text-pale-gray">
          {date.getDate() === today.getDate()
            ? "Today"
            : date.toLocaleDateString("en-EN", { weekday: "long" })}
        </h4>
        <button
          className="bg-cloud-blue text-white px-4 py-1 rounded-full ml-auto text-sm w-[100px]"
          onClick={() => {
            setIsHourlyForecastVisible((oldState) => !oldState);
          }}
        >
          {isHourlyForecastVisible ? "See less" : "See more"}
        </button>
      </div>
      <Animation className="slide" isVisible={isHourlyForecastVisible}>
        <div className="flex py-4">
          {forecastByHour.map((forecast) => (
            <div className="w-full flex flex-col py-2 pt-1 items-center">
              <h4 className="text-center text-sm text-pale-gray font-medium">{`${new Date(
                forecast.time
              ).getHours()}:00`}</h4>
              <img
                src={`https:${forecast.condition.icon}`}
                className="mx-auto w-10"
              />
              <h5 className="text-sm text-white font-medium text-center">
                {`${forecast.temp_c}°C`}
              </h5>
            </div>
          ))}
        </div>
      </Animation>
    </div>
  );
};

export default SingleDayForecast;
