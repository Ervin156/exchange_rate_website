import React,{Component} from 'react';
import './Contacts.scss';

class Contacts extends Component {
  

    render() {
        return (
            <div className='contacts'>
                <h1>Контактная информация</h1>
                <ul>
                    <li>Дмитрий Листов</li>
                    <li>тел.: <i>+ 38(068)-058-48-66</i></li>
                    <li>email: <i><a href='dmitriylystov@gmail.com'>dmitriylystov@gmail.com</a></i></li>
                    <li><a href="https://www.facebook.com/dmitriy.listov.89" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://github.com/Ervin156" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
                <p> На сайте используются API предоставляемые сервисами
                    <a href="https://exchangeratesapi.io/">exchangeratesapi.io</a>,
                    <a href="https://api.privatbank.ua/#p24/exchange">api.privatbank.ua</a>,
                    <a href="https://unsplash.com/documentation#list-photos">api.unsplash.com</a>
                </p>
            </div>
        )
    }
}
export default Contacts;