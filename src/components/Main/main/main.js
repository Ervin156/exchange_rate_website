import React from 'react';

import './main.scss';

class PrivatAPI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'currecyRate': {
            },
        }
        this.currency = ['Валюта обмена', 'Основная валюта', 'Покупка', 'Продажа'];
        this.getRequest();
    }
    getRequest = () => {
        const URL = ' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
        fetch(URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // let result = {}
                let container = document.querySelector('.flex-container')

                for (let item of data) {
                    const { ...spread } = item;
                    let block = document.createElement('div');
                    block.classList.add('flex-item');
                    let currencyName = document.createElement('p');
                    currencyName.className = 'currency-name';
                    let currencyIn = document.createElement('p');
                    currencyIn.className = "currency-in";
                    let currencyOut = document.createElement('p');
                    currencyOut.className = "currency-out";
                    let box = document.createElement('div');
                    box.className = 'rate-box';

                    currencyName.innerHTML += spread.ccy;
                    currencyIn.innerHTML += `<b>Покупка</b> \t${spread.buy}`;
                    currencyOut.innerHTML += `<b>Продажа</b> \t${spread.sale}`;
                    box.append(currencyName, currencyIn, currencyOut);

                    block.append(box);
                    container.appendChild(block)

                }
                // for (let itemObj in this.currency) {
                //     result[this.currency[itemObj]] = data.itemObj;
                //     this.setState({ currecyRate: result })
                // }
            })
    }
    render() {
        console.log(this.state.currecyRate)
        return (
            <div className='privat-api'>
                <h1>PrivatAPI page</h1>
                <h3>Курс валют на 2020 г.</h3>
                <div className="container">
                    <main>
                        <div className="flex-container" id="flex-item">
                        </div>
                    </main>
                </div>
            </div>

        )
    }
}
export default PrivatAPI;