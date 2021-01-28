import React, { Component } from "react";
import Category from "../../molecules/Category/Category";
import Menu from "../../molecules/Menu/Menu";
import WatchList from "../../molecules/WatchList/WatchList";

class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Category />
        <WatchList />
      </div>
    );
  }
}

export default Home;
