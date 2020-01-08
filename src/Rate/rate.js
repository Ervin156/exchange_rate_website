import React from 'react';
import { BASE_URL } from './settings';

import './rate.scss';

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
        const url = BASE_URL;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ date: data.date });
                let result = {};
                for (let i in this.currency) {
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }
                console.log(result);
                this.setState({ currecyRate: result })
            })
    }
    render() {
        return (
            <div className='rate'>
                <h3>Курс валют на {this.state.date} г.</h3>
                <div className="flex-container">
                    {Object.keys(this.state.currecyRate).map((keyName, i) => (
                        <div className="block flex-item" key={keyName}>
                            {/* для предотвращения ошибки => "Warning: Each child in a list should have a unique "key" prop" указать уникальный ключ key={keyName}*/}
                            <div className="currency-name">{keyName}</div>
                            <div className="currency-in">{this.state.currecyRate[keyName].toFixed(3)} *</div>
                            <p>* Можно купить за 1 USD</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default Rate;