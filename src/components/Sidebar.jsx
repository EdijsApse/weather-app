import Link from "./UI/Link";

const Sidebar = () => {
  return (
    <div className="w-22 bg-darkish-blue p-4 rounded-lg">
      <div className="flex items-center justify-center p-4 bg-dark-cloud-blue rounded-lg">
        <i className="fa-solid fa-wind text-xl text-white"></i>
      </div>
      <div className="space-y-4 flex flex-col items-center mt-10">
        <Link label="Weather" iconClass="fa-solid fa-cloud-sun-rain" />
        <Link label="Cities" iconClass="fa-solid fa-city" />
      </div>
    </div>
  );
};

export default Sidebar;
