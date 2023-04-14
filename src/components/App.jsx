import Sidebar from "./Sidebar";
import sunIcon from "../assets/sun.png";

const App = () => {
  return (
    <div className="container flex mx-auto space-x-8 py-16">
      <Sidebar />
      <div className="w-full space-y-8">
        <div className="w-2/3 pr-5">
          <input
            className="w-full bg-darkish-blue rounded-lg p-4 text-white focus:outline-none"
            type="text"
            placeholder="Search for city..."
          />
        </div>
        <div className="flex space-x-8 w-full">
          <div className="w-2/3 space-y-8">
            <div className="flex justify-between px-12">
              <div className="flex flex-col justify-between">
                <div className="text-white space-y-2">
                  <h2 className="text-6xl">Madrid</h2>
                  <p className="text-pale-gray">Chance of rain 30%</p>
                </div>
                <p className="text-5xl text-white">30 Cels</p>
              </div>
              <img src={sunIcon} className="w-60" />
            </div>
            <div className="bg-darkish-blue rounded-lg p-6 pb-8 space-y-6">
              <h3 className="text-pale-gray text-sm font-bold uppercase">
                Today's forecast
              </h3>
              <div className="flex">
                <div className="w-1/6 border-r-2 border-dark-cloud-blue px-4 space-y-4 text-center">
                  <h4 className="text-lg text-pale-gray font-bold">6:00 AM</h4>
                  <img src={sunIcon} className="w-14 mx-auto" />
                  <h5 className="text-3xl text-white font-bold">20</h5>
                </div>
                <div className="w-1/6 border-r-2 border-dark-cloud-blue px-4 space-y-4 text-center">
                  <h4 className="text-lg text-pale-gray font-bold">6:00 AM</h4>
                  <img src={sunIcon} className="w-14 mx-auto" />
                  <h5 className="text-3xl text-white font-bold">20</h5>
                </div>
                <div className="w-1/6 border-r-2 border-dark-cloud-blue px-4 space-y-4 text-center">
                  <h4 className="text-lg text-pale-gray font-bold">6:00 AM</h4>
                  <img src={sunIcon} className="w-14 mx-auto" />
                  <h5 className="text-3xl text-white font-bold">20</h5>
                </div>
                <div className="w-1/6 border-r-2 border-dark-cloud-blue px-4 space-y-4 text-center">
                  <h4 className="text-lg text-pale-gray font-bold">6:00 AM</h4>
                  <img src={sunIcon} className="w-14 mx-auto" />
                  <h5 className="text-3xl text-white font-bold">20</h5>
                </div>
                <div className="w-1/6 border-r-2 border-dark-cloud-blue px-4 space-y-4 text-center">
                  <h4 className="text-lg text-pale-gray font-bold">6:00 AM</h4>
                  <img src={sunIcon} className="w-14 mx-auto" />
                  <h5 className="text-3xl text-white font-bold">20</h5>
                </div>
                <div className="w-1/6 px-4 space-y-4 text-center">
                  <h4 className="text-lg text-pale-gray font-bold">6:00 AM</h4>
                  <img src={sunIcon} className="w-14 mx-auto" />
                  <h5 className="text-3xl text-white font-bold">20</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-white rounded-lg">3</div>
        </div>
      </div>
    </div>
  );
};

export default App;
