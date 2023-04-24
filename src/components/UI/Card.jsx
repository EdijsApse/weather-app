const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-darkish-blue rounded-3xl p-6 pb-8 lg:p-8 lg:pb-10 ${className} `}
    >
      {children}
    </div>
  );
};

export default Card;
