import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {

    render() {
        return (
                <div className="header-nav">
                    <div className="container">
                        <nav>
                            <input type="checkbox" id="checkbox-menu" />
                            <label htmlFor="checkbox-menu">
                                <ul className="menu touch">
                                    <li><NavLink to="/">Курс Доллара</NavLink></li>
                                    <li><NavLink to="/rateUAH">Курс гривны</NavLink></li>
                                    <li><NavLink to="/points">Пункты обмена</NavLink></li>
                                    <li><NavLink to="/photos">Фоточки</NavLink></li>
                                    <li><NavLink to="/contacts">Контакты</NavLink></li>
                                </ul>
                                <span className="toggle">=</span>
                            </label>
                        </nav>
                    </div>
                </div>
        )
    }
}
export default Nav;