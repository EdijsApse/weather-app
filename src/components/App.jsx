import Sidebar from "./Sidebar";
import Forecast from "../pages/Forecast";
import { useContext } from "react";
import WeatherContext, {
  CITIES_PAGE,
  FORECAST_PAGE,
} from "../store/weather-context";
import Cities from "../pages/Cities";

const App = () => {
  const context = useContext(WeatherContext);
  return (
    <div className="w-full mx-6 flex py-0 pt-6 pb-24 lg:py-16 lg:space-x-8 lg:container lg:mx-auto">
      <Sidebar />
      {context.selectedPage === FORECAST_PAGE && <Forecast />}
      {context.selectedPage === CITIES_PAGE && <Cities />}
    </div>
  );
};

export default App;
