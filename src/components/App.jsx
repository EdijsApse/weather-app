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
    <div className="container flex mx-auto space-x-8 py-16">
      <Sidebar />
      {context.selectedPage === FORECAST_PAGE && <Forecast />}
      {context.selectedPage === CITIES_PAGE && <Cities />}
    </div>
  );
};

export default App;
