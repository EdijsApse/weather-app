import { useContext } from "react";
import Link from "./UI/Link";
import WeatherContext, {
  CITIES_PAGE,
  FORECAST_PAGE,
} from "../store/weather-context";

const Sidebar = () => {
  const context = useContext(WeatherContext);
  return (
    <div className="fixed flex space-x-6 bottom-0 left-0 z-10 w-full bg-darkish-blue p-4 lg:rounded-lg lg:space-x-0 lg:h-[calc(100vh-8rem)] lg:flex-col lg:sticky lg:top-16 lg:w-[7rem]">
      <div className="flex items-center justify-center p-2 px-4 bg-dark-cloud-blue rounded-lg lg:p-4">
        <i className="fa-solid fa-wind text-white text-sm lg:text-xl"></i>
      </div>
      <div className="flex items-center space-x-6 w-full justify-center lg:space-x-0 lg:mt-10 lg:flex-col lg:space-y-4">
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
