import React from "react";
import Style from '../Button/styles.module.css';

const Button = ({ type, children }) => {
  return <button className={Style.buttonPrimary} type={type}>{children}</button>;
};

Button.defaultProps = {
  type: "button",
};

export default Button;
