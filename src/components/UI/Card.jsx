const Card = ({ children, className }) => {
  return (
    <div className={`bg-darkish-blue rounded-3xl p-8 pb-10 ${className} `}>
      {children}
    </div>
  );
};

export default Card;
