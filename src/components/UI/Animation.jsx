import CSSTransition from "react-transition-group/CSSTransition";

const Animation = ({ children, isVisible, animationClass = "fade" }) => {
  return (
    <CSSTransition
      classNames={animationClass}
      timeout={300}
      in={isVisible}
      mountOnEnter
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default Animation;
