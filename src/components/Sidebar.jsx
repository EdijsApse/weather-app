import { useContext } from "react";
import Link from "./UI/Link";
import WeatherContext, {
  CITIES_PAGE,
  FORECAST_PAGE,
} from "../store/weather-context";

const Sidebar = () => {
  const context = useContext(WeatherContext);
  return (
    <div className="sticky top-16 w-22 bg-darkish-blue p-4 rounded-lg h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-center p-4 bg-dark-cloud-blue rounded-lg">
        <i className="fa-solid fa-wind text-xl text-white"></i>
      </div>
      <div className="space-y-4 flex flex-col items-center mt-10">
        <Link
          label="Weather"
          iconClass="fa-solid fa-cloud-sun-rain"
          onClickHandler={() => {
            context.changePage(FORECAST_PAGE);
          }}
          isActive={context.selectedPage === FORECAST_PAGE}
        />
        <Link
          label="Cities"
          iconClass="fa-solid fa-city"
          onClickHandler={() => {
            context.changePage(CITIES_PAGE);
          }}
          isActive={context.selectedPage === CITIES_PAGE}
        />
      </div>
    </div>
  );
};

export default Sidebar;
