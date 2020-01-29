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
                console.log(data);
                this.setState({ date: data.date });
                console.log(this.state.date)
                let result = {};
                for (let i in this.currency) {
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }
                console.log(result);
                this.setState({ currecyRate: result })
                this.createDate(data);
            })
    }
    createDate = data => {
        const { date } = data;
        const word = date;
        const arDate = [];
        for (let i = word.length - 1; i >= 0; i--){
            arDate.push(date[i])
            console.log(i)

        }
        // return arDate;
        console.log(arDate)
    }
    render() {
        return (
            <div className='rate'>
                <div className='rate-header'>
                    <h3>Курс валют на {this.state.date} г.</h3>
                    <Weather />
                </div>
                <div className="flex-container">
                    {Object.keys(this.state.currecyRate).map((keyName) => (
                        <div className="block flex-item" key={keyName}>
                            {/* для предотвращения ошибки => "Warning: Each child in a list should have a unique "key" prop" указать уникальный ключ key={keyName}*/}
                            <div className="currency-name">{keyName}</div>
                            <div className="currency-in">{this.state.currecyRate[keyName].toFixed(3)} *</div>
                            <p>* Можно купить за 1 USD</p>
                        </div>
                    ))}
                </div>
                <Calculator rate={this.state.currecyRate} />

            </div>
        )
    }
}
export default Rate;