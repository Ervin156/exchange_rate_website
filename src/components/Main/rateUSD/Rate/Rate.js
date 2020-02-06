import React from 'react';
import Calculator from '../Calculator/Calculator';
import { BASE_URL_USD } from '../../../settings/settings';
import Weather from '../../weather/Weather';

import './Rate.scss';


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currecyRate': {
            }
        }
        this.currency = ['EUR', 'RUB', 'CAD', 'PHP']
        this.getRate();
    }
    getRate = () => {
        const url = BASE_URL_USD;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ date: data.date });
                let result = {};
                for (let i in this.currency) {
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }
                this.setState({ currecyRate: result })
            })
    }
    render() {
        return (
            <div className='rate'>
                <div className='rate-header'>
                    <h3>Курс валют на {this.state.date} г.</h3>
                    <Weather />
                </div>
                <div className="flex-container">
                    <div className='currency-container'>
                        {Object.keys(this.state.currecyRate).map((keyName) => (

                            <div className="block flex-item" key={keyName}>
                                {/* для предотвращения ошибки => "Warning: Each child in a list should have a unique "key" prop" указать уникальный ключ key={keyName}*/}
                                <div className="currency-name">{keyName}</div>
                                <div className="currency-in">{this.state.currecyRate[keyName].toFixed(3)} *</div>
                                <p id="full-screen">* Можно купить за 1 USD</p>
                            </div>
                        ))}
                    </div>
                    <p id="mobile-screen">* Можно купить за 1 USD</p>


                </div>
                <Calculator rate={this.state.currecyRate} />

            </div>
        )
    }
}
export default Rate;