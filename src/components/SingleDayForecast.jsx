const SingleDayForecast = ({ forecast }) => {
  const date = new Date(forecast.date);
  const today = new Date();

  return (
    <div className="flex items-center py-6 border-b border-dark-cloud-blue last:border-b-0">
      <h4 className="font-lg text-pale-gray w-1/5 mr-12">
        {date.getDate() === today.getDate()
          ? "Today"
          : date.toLocaleDateString("en-EN", { weekday: "long" })}
      </h4>
      <div className="w-2/3 flex items-center">
        <div className="flex items-center w-4/5 space-x-4">
          <img src={forecast.day.condition.icon} className="w-14" />
          <h5 className="text-xs font-medium text-bright-gray tracking-wider">
            {forecast.day.condition.text}
          </h5>
        </div>
        <h5 className="font-lg text-pale-gray w-1/3 text-right">
          <span className="font-medium text-bright-gray">
            {forecast.day.maxtemp_c}
          </span>{" "}
          /{forecast.day.mintemp_c}
        </h5>
      </div>
    </div>
  );
};

export default SingleDayForecast;
