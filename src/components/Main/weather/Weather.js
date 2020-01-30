import React from 'react';
import { BASE_WEATHER_URL, WEATHER_CLIENT_ID } from "../../settings/settings";
import './Weather.scss';

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: '',
            weather: {
                coord: '',
                weather: '',
                main: '',
                visibility: '',
                wind: '',
                sys: '',
            },
            sunrise: '',
            sunset: '',
            icon: '',
        }
        this.fetchWeather();
    }
    fetchWeather = () => {
        const url = `${BASE_WEATHER_URL}&appid=${WEATHER_CLIENT_ID}`;
        fetch(url)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                this.setState({ cityName: data.name + ',\t' + data.sys.country });
                this.createWeaterState(data);
                this.convertUNIXTimeSunrise(data);
                this.convertUNIXTimeSunset(data);
            })
    }
    createWeaterState = data => {
        const { coord, weather, main, visibility, sys, wind } = data;
        const res = { coord, weather, main, visibility, sys, wind };
        this.setState({ weather: res })
        for (let i of weather) {
            this.setState({ icon: `https://openweathermap.org/img/wn/${i['icon']}@2x.png` });
            return
        }
    }
    convertUNIXTimeSunrise = (data) => {
        let { sys } = data;
        const unix = new Date(sys.sunrise * 1000);
        const hour = unix.getHours();
        const minutes = unix.getMinutes();
        const sec = unix.getSeconds();
        const timeSunrise = `${hour} : ${minutes} : ${sec}`
        this.setState({ sunrise: timeSunrise })

    }
    convertUNIXTimeSunset = (data) => {
        let { sys } = data;
        const unix = new Date(sys.sunset * 1000);
        const hour = unix.getHours();
        const minutes = unix.getMinutes();
        const sec = unix.getSeconds();
        const timeSunset = `${hour} : ${minutes} : ${sec}`
        this.setState({ sunset: timeSunset })
    }
    render() {
        return (
            <div className="weather">
                <h1 id='country'>{this.state.cityName}</h1>
                <div id='temp'>
                    <li>
                        <i>Температура</i>
                        <i>{(this.state.weather.main.temp - 273.15).toFixed(1)}&deg;</i>
                    </li>
                </div>
                <div id='feels_like'>
                    <li>
                        <i>Ощущается как</i>
                        <i>{(this.state.weather.main.feels_like - 273.15).toFixed(1)}&deg;</i>
                    </li>
                </div>
                <div id='wisibility'>
                    <li>
                        <i>Видимость</i>
                        <i>{this.state.weather.visibility / 1000} км</i>
                    </li>
                </div>
                <div id='wind-speed'>
                    <li>
                        <i>Скорость ветра</i>
                        <i>{this.state.weather.wind.speed} м/с</i>
                    </li>
                </div>
                <div id='pressure'>
                    <li>
                        <i>Атм. давление</i>
                        <i>{(this.state.weather.main.pressure * 0.75).toFixed(1)} мм рт.ст.</i>
                    </li>
                </div>
                <div id='sunrise'>
                    <li>
                        <i>Рассвет</i>
                        <i> {this.state.sunrise}</i>
                    </li>

                </div>
                <div id='sunset'>
                    <li>
                        <i>Закат</i>
                        <i> {this.state.sunset}</i>
                    </li>
                </div>
                <div id='icon'>
                    <img src={this.state.icon} alt='' />
                </div>
            </div >
        );
    }
}
export default Weather;