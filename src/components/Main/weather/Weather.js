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
                this.createBlockWhithParametrs(data)
            })
    }
    createBlockWhithParametrs = (data) => {
        console.log(data);
        let { weather, main, wind, sys } = data;
        let img = document.createElement('img');
        img.src = `https://openweathermap.org/img/wn/${weather[0]['icon']}@2x.png`;
        document.querySelector('#country').textContent += ',\t' + sys.country;
        document.querySelector('.weather').append(img);
        document.querySelector('#temp').innerHTML = Math.round((main.temp - 273.15)) + '&deg;';
        document.querySelector('#feels_like').innerHTML = 'Feel like \t' + Math.round((main.feels_like - 273.15)) + '&deg;';
        document.querySelector('#wind-speed').textContent = wind.speed + '\tm/s';
        document.querySelector('#pressure').textContent = main.pressure + '\t hpa';
    }
    render() {
        console.log(this.state.weather)
        return (
            <div className="weather">
                <h1 id='country'>{this.state.weatherName.name}</h1>
                <li id='temp'></li>
                <li id='feels_like'></li>
                <li id='wind-speed'></li>
                <li id='pressure'></li>
                <li id='qwe'></li>
            </div>
        );
    }
}
export default Weather;