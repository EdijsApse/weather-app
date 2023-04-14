const Link = ({ iconClass, label }) => {
  return (
    <a
      href="#"
      className="text-center text-white text-sm p-2 hover:bg-dark-cloud-blue w-full rounded-lg transition"
    >
      <i className={`${iconClass} text-lg mb-2`}></i>
      <span className="block">{label}</span>
    </a>
  );
};
export default Link;
