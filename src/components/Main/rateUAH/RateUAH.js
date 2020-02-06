import React from 'react';
import { BASE_URL_UAH } from '../../settings/settings';

import './RateUAH.scss';

class RateUAH extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            currecyRate: [],
        }
        this.getRequest();

    }
    getRequest = () => {
        const url = BASE_URL_UAH;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ currecyRate: data });
                this.currentDate()
            })
    }
    currentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();
        const current = `${day}.${month}.${year}`;
        this.setState({ date: current })
    };
    render() {
        const styles = {
            block: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            item: {
                width: '40%',
            }
        }
        return (
            <div className='rate'>
                <div className='rate-header'>
                    <h3>Курс гривны на {this.state.date} г.</h3>
                </div>
                <div className="container">
                    <main>
                        <div className="flex-container" id="flex-item" >
                            <div className='currency-container' style={styles.block}>
                                {this.state.currecyRate.map(item => {
                                    return (
                                        <div style={styles.item} className='block flex-item' key={item.ccy}>
                                            <div className="currency-name">{item.ccy}</div>
                                            <div className="currency-buy"><i>Покупка:</i> {Math.round(parseFloat(+item.buy) * 100) / 100}</div>
                                            <div className="currency-sale"><i>Продажа:</i>{Math.round(parseFloat(+item.sale) * 100) / 100}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
export default RateUAH;