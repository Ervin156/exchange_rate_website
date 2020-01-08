import React from 'react';

import './header.scss';
import Nav from '../Nav/nav';

class Header extends React.Component {
    render() {
        return (

            <header>
                <div className="top-bar animate-drop-down"></div>
                <div className="main-header">
                    <div className="container">
                        <h1 className="site-title">React Lite Level</h1>
                    </div>
                </div>
                <Nav />
            </header>

        )
    }
}
export default Header;