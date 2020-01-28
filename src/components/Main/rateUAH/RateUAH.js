import React from 'react';

import './RateUAH.scss';

class RateUAH extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currecyRate: []
        }
        this.getRequest();
    }
    getRequest = () => {
        const URL = ' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
        fetch(URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ currecyRate: data });
            })
    }
    render() {
        return (
            <div className='privat-api'>
                <h3>Курс валют на 2020 г.</h3>
                <div className="container">
                    <main>
                        <div className="flex-container" id="flex-item">
                            {this.state.currecyRate.map(item => {
                                return (
                                    <div className='block flex-item' key={item.ccy}>
                                        <div className="currency-name">{item.ccy}</div>
                                        <div className="currency-buy"><i>Покупка:</i> {Math.round(parseFloat(+item.buy) * 100) / 100}</div>
                                        <div className="currency-sale"><i>Продажа:</i>{Math.round(parseFloat(+item.sale) * 100) / 100}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </main>
                </div>
            </div>

        )
    }
}
export default RateUAH;

// const word = 'ABABQBA';
// const polindrom = word => {
//     return word === word.split('').reverse().join('');
// }
// const res = polindrom(word);
// console.log(res);