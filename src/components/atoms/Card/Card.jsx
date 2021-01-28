import React from "react";
import Style from '../Card/styles.module.css';
import className from 'classnames';

const Card = ({ imgSrc, text, customClass }) => {
const customClasses = className(Style.wrapper, customClass)
  return (
    <div className={customClasses}>
      <img className={Style.img} src={imgSrc} />
      <span className={Style.text} >{text}</span>
    </div>
  );
};

export default Card;
