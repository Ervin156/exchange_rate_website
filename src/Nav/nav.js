import React from 'react';
import './nav.scss';

class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>
                <div className="header-nav">
                    <div className="container">
                        <nav>
                            <ul>
                                <li><a href="/">Главная</a></li>
                                <li><a href="/">Пункты обмена</a></li>
                                <li><a href="/">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;