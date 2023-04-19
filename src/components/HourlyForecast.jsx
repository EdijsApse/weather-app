const HourlyForecast = ({ forecast }) => {
  const forecastDate = new Date(forecast.time);
  return (
    <div className="w-1/6 border-r-2 border-dark-cloud-blue px-4 space-y-4 text-center last:border-r-0">
      <h4 className="text-lg text-pale-gray font-bold">{`${forecastDate.getHours()}:00`}</h4>
      <img src={`https:${forecast.condition.icon}`} className="mx-auto" />
      <h5 className="text-3xl text-white font-bold">
        {`${forecast.temp_c}°C`}
      </h5>
    </div>
  );
};

export default HourlyForecast;
