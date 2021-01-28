import React from "react";
import Hamberger from "../../atoms/Hamberger/Hamberger";
import Logo from "../../atoms/Logo/Logo";
import Style from "../Menu/styles.module.css";
import NavItems from "../../atoms/NavItems/NavItems";
import InputSearch from "../../atoms/InputSearch/InputSearch";
import Button from "../../atoms/Button/Button";
import Data from "../../../data.json";

const Menu = () => {
  return (
    <div className={Style.navigation}>
      <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '2rem'}}>
      <Hamberger />
      </div>
      <div style={{ marginRight: '2rem' }}>
      <Logo />
      </div>
      <NavItems />
      </div>
      <div style={{ display: 'flex' }}>
      <InputSearch />
      <Button>{Data.navBar.buttonLable}</Button>
      </div>
    </div>
  );
};


export default Menu;
