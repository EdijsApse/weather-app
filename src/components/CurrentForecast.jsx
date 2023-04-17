const CurrentForecast = ({ cityName, chanceOfRain, currentTemp, iconLink }) => {
  const image = iconLink.replace(/[0-9]+x[0-9]+/, "128x128");
  return (
    <div className="flex justify-between items-center px-12">
      <div className="flex flex-col justify-between space-y-12">
        <div className="text-white space-y-2">
          <h2 className="text-5xl">{cityName}</h2>
          <p className="text-pale-gray">Chance of rain {`${chanceOfRain}%`}</p>
        </div>
        <p className="text-7xl text-white font-bold">
          {currentTemp}
          <sup className="relative -top-12 font-medium text-3xl">o</sup>
        </p>
      </div>
      <img src={`https:${image}`} />
    </div>
  );
};

export default CurrentForecast;
