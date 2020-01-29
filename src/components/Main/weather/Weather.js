import React from 'react';
import { BASE_WEATHER_URL, WEATHER_CLIENT_ID } from "../../settings/settings";
import './Weather.scss';
class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.fetchWeather();
        this.state = {
            weatherName: {}
        }
    }
    fetchWeather = () => {
        const url = `${BASE_WEATHER_URL}&appid=${WEATHER_CLIENT_ID}`;
        fetch(url)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                this.setState({ weatherName: data })
                this.createBlockWhithParametrs(data);
                this.convertUNIXTimeSunrise(data);
                this.convertUNIXTimeSunset(data);
            })
    }
    createBlockWhithParametrs = (data) => {
        console.log(data);
        let { weather, main, wind, sys } = data;
        let img = document.createElement('img');
        img.src = `https://openweathermap.org/img/wn/${weather[0]['icon']}@2x.png`;
        document.querySelector('#country').innerHTML += ',\t' + sys.country;
        document.querySelector('.weather').append(img);
        document.querySelector('#temp').innerHTML = `<li><i>Temperature\t:</i><i>${Math.round((main.temp - 273.15)) + '&deg;'}</i></li>`;
        document.querySelector('#feels_like').innerHTML = `<li><i>Feel like\t:</i><i>${Math.round((main.feels_like - 273.15))}&deg;</i></li>`;
        document.querySelector('#wind-speed').innerHTML = `<li><i>Wind speed\t:</i><i>${wind.speed}\tm/s</i></li>`;
        document.querySelector('#pressure').innerHTML = `<li><i>Pressure\t:</i><i>${main.pressure + '\t hpa'}</i></li>`;
        document.querySelector('#sunrise').innerHTML = `<li><i>Sunrise\t:</i><i>${this.convertUNIXTimeSunrise(data)}</i></li>`;
        document.querySelector('#sunset').innerHTML = `<li><i>Sunset\t:</i><i>${this.convertUNIXTimeSunset(data)}</i></li>`;
    }
    convertUNIXTimeSunrise = (data) => {
        let { sys } = data;
        const unix = new Date(sys.sunrise * 1000);
        const hour = unix.getHours();
        const minutes = unix.getMinutes();
        const sec = unix.getSeconds();
        const timeSunrise = `<i>${hour}</i> : <i>${minutes}</i> : <i>${sec}</i>`
        return timeSunrise;
    }
    convertUNIXTimeSunset = (data) => {
        let { sys } = data;
        const unix = new Date(sys.sunset * 1000);
        const hour = unix.getHours();
        const minutes = unix.getMinutes();
        const sec = unix.getSeconds();
        const timeSunrise = `<i>${hour}</i> : <i>${minutes}</i> : <i>${sec}</i>`
        return timeSunrise;
    }
    render() {
        return (
            <div className="weather">
                <h1 id='country'>{this.state.weatherName.name}</h1>
                <div id='temp'></div>
                <div id='feels_like'></div>
                <div id='wisibility'></div>
                <div id='wind-speed'></div>
                <div id='pressure'></div>
                <div id='sunrise'></div>
                <div id='sunset'></div>

            </div>
        );
    }
}
export default Weather;