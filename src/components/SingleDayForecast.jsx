const SingleDayForecast = ({ forecast }) => {
  const date = new Date(forecast.date);
  const today = new Date();

  return (
    <div className="flex items-center py-6 border-b border-dark-cloud-blue last:border-b-0">
      <h4 className="font-lg text-pale-gray w-full max-w-[75px]">
        {date.getDate() === today.getDate()
          ? "Today"
          : date.toLocaleDateString("en-EN", { weekday: "long" })}
      </h4>
      <img src={forecast.day.condition.icon} className="w-10 mx-auto" />
      <h5 className="font-lg text-pale-gray text-right w-full max-w-[75px]">
        <span className="font-medium text-bright-gray">
          {forecast.day.maxtemp_c}
        </span>{" "}
        /{forecast.day.mintemp_c}
      </h5>
    </div>
  );
};

export default SingleDayForecast;
