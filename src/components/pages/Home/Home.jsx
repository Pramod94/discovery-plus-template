import React, { Component } from 'react';
import Category from '../../molecules/Category/Category';
import Menu from '../../molecules/Menu/Menu';

class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Category />
            </div>
        );
    }
}

export default Home;
