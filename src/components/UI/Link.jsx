const Link = ({ iconClass, label, onClickHandler, isActive }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClickHandler();
  };

  return (
    <a
      href="#"
      className={`text-center text-white text-sm p-2 hover:bg-dark-cloud-blue w-full rounded-lg transition ${
        isActive ? "bg-dark-cloud-blue" : ""
      }`}
      onClick={handleClick}
    >
      <i className={`${iconClass} text-lg mb-2`}></i>
      <span className="block">{label}</span>
    </a>
  );
};
export default Link;
