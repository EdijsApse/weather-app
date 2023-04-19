import Sidebar from "./Sidebar";
import Forecast from "../pages/Forecast";
import { useContext } from "react";
import WeatherContext, {
  CITIES_PAGE,
  FORECAST_PAGE,
} from "../store/weather-context";

const App = () => {
  const context = useContext(WeatherContext);
  return (
    <div className="container flex mx-auto space-x-8 py-16">
      <Sidebar />
      {context.selectedPage === FORECAST_PAGE && <Forecast />}
      {context.selectedPage === CITIES_PAGE && <h1>Cities page</h1>}
    </div>
  );
};

export default App;
