import React from 'react';
import Rate from '../Rate/Rate';
import './Home.scss';

class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div>
                <div className="container">
                    <main>
                        <Rate />
                        <h3>Калькулятор обмена</h3>
                        <div className="block">
                            <div>Яхочу</div>
                            <div><label><input type="radio" name="radio" defaultValue="0" />купить</label></div>
                            <div><label><input type="radio" name="radio" defaultValue="1" />продать</label></div>

                            <div>
                                <input type="number" defaultValue="150" />
                                <select name="" id="">
                                    <option defaultValue="USD">USD</option>
                                    <option defaultValue="UAH">UAH</option>
                                    <option defaultValue="EUR">EUR</option>
                                </select>
                            </div>
                            <div>
                                <h4>Результат</h4>
                                <ul className="calc-res">
                                    <li>EUR 150</li>
                                    <li>EUR 150</li>
                                    <li>EUR 150</li>
                                    <li>EUR 150</li>
                                </ul>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="container" id="cookie-info">
                    <div className="site-content">
                        <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.
            <br />
                            В частности, для персонифицированной работы сайта мы обрабатываем IP-фдрес региона вашего
                            местоположения.&nbsp;
            <a href='/' className="btn btn-primary btn-sm">OK</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;