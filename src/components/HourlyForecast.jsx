const HourlyForecast = ({ forecast }) => {
  const forecastDate = new Date(forecast.time);
  return (
    <div className="w-full flex py-2 items-center border-b border-dark-cloud-blue text-center last:border-r-0 last:border-b-0 md:py-0 md:px-4 md:space-y-2 md:w-1/6 md:block md:border-b-0 md:border-r-2 lg:space-y-4">
      <h4 className="w-[40px] text-left text-md text-pale-gray font-medium md:w-full md:text-center lg:text-lg lg:font-bold">{`${forecastDate.getHours()}:00`}</h4>
      <img src={`https:${forecast.condition.icon}`} className="mx-auto" />
      <h5 className="w-[60px] text-xl text-white font-medium text-right md:w-full md:text-center lg:font-bold lg:text-3xl">
        {`${forecast.temp_c}°C`}
      </h5>
    </div>
  );
};

export default HourlyForecast;
