import React from 'react';

import './Header.scss';
import Nav from '../Nav/Nav';

class Header extends React.Component {
    render() {
        return (

            <header>
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