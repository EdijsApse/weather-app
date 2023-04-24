const Link = ({ iconClass, label, onClickHandler, isActive }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClickHandler();
  };

  return (
    <a
      href="#"
      className={`flex justify-center items-center space-x-4 text-center text-white text-sm p-2 hover:bg-dark-cloud-blue w-full rounded-lg transition lg:space-x-0 lg:block ${
        isActive ? "bg-dark-cloud-blue" : ""
      }`}
      onClick={handleClick}
    >
      <i className={`${iconClass} text-sm lg:text-lg lg:mb-2`}></i>
      <span className="block">{label}</span>
    </a>
  );
};
export default Link;
