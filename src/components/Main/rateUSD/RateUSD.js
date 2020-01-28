import React from 'react';
import Rate from './Rate/Rate';
import './RateUSD.scss';

class RateUSD extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <main>
                        <Rate />
                    </main>
                </div>
                <div className="container" id="cookie-info">
                    <div className="site-content">
                        <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.
            <br />
                            В частности, для персонифицированной работы сайта мы обрабатываем IP-фдрес региона вашего
                            местоположения.&nbsp;
            <button href='/' className="btn btn-primary btn-sm">OK</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default RateUSD;