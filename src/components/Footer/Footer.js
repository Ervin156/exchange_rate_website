import React from "react";
import { NavLink } from 'react-router-dom';
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="footer" id="footer">
          <div className="footer-bottom">
            <div className="container">
              <div className="flex-container">
                <div className="flex-item">
                  <h1 className="footer-title">
                    <a href="https://itgid.info/">
                      2019 &copy; React. Lite Level
                    </a>
                  </h1>
                  <p>All Rights Reserved</p>
                </div>
                <div className="flex-item">
                  <div className="module-body">
                    <ul className="list-unstyled">
                      <li>
                        <NavLink to="/contacts" tooltip="Контакты">Контакты</NavLink>
                      </li>
                      <li>
                        <a href="/d">Гарантии</a>
                      </li>
                      <li>
                        <a href="/s">О сервисе</a>
                      </li>
                      <li>
                        <a href="/o">Условия возврата</a>
                      </li>
                      <li>
                        <a href="/p">Соглашение о использовании сервиса</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-bar">
            {/* <div className="flex-container">
              <div className="flex-item">
                <ul className="link" />
              </div>
              <div className="flex-item">
                <div className="clearfix payment-methods">
                  <ul>
                    <img
                      src=""
                      alt=""
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="www.webmoney.ru"
                    />
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
