const SingleDetail = ({ label, iconClass, value }) => {
  return (
    <div>
      <div className="flex text-pale-gray items-center">
        <div className="w-6 sm:w-10 text-sm sm:text-lg lg:text-xl">
          <i className={iconClass}></i>
        </div>
        <h2 className="text-sm font-medium sm:text-md">{label}</h2>
      </div>
      <h3 className="relative left-6 sm:left-10 text-white font-medium text-md sm:text-xl lg:font-bold lg:text-2xl">
        {value}
      </h3>
    </div>
  );
};
export default SingleDetail;
