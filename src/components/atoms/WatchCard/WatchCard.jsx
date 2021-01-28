import React from "react";
import Style from "../WatchCard/styles.module.css";

const WatchCard = ({ imgSrc, title, subTitle, className }) => {
  return (
    <div className={className}>
      <img src={imgSrc} className={Style.cardImg} />
    </div>
  );
};

export default WatchCard;
