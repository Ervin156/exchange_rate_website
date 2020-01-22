import React from 'react';

import './main.scss';

class PrivatAPI extends React.Component {
    constructor(props) {
        super(props)
        this.getRequest();
    }
    getRequest = () => {
        const URL = ' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
        // const URL = ' https://www.live-rates.com/rates';
        fetch(URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.createBlock(data)
            })
        this.createBlock = (data) => {
            const container = document.querySelector('.flex-container');
            data.map(index => {
                const blockRate = document.createElement('div');
                blockRate.className = 'block flex-item';
                const currecyRate = document.createElement('div');
                currecyRate.className = 'currency-name';
                const sale = document.createElement('li');
                const buy = document.createElement('li');
                const { ...spread } = index;
                this.setState({ currecyRate: index })
                currecyRate.innerHTML += spread.ccy;
                sale.innerHTML += `<b>Продажа</b> <br><br>${spread.sale} \t <b>${spread.base_ccy}</b>`;
                buy.innerHTML += `<b>Покупка</b> <br><br>\t${spread.buy} \t<b>${spread.base_ccy}</b>`;
                blockRate.append(currecyRate, sale, buy)
                container.append(blockRate)
            })
        }
    }
    render() {
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