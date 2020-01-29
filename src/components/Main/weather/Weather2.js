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
                main: "",
                visibility: "",
                wind: "",
                sys: "",
            },
            sunrise: '',
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
                console.log(data)
                this.setState({ cityName: data.name });
                this.createWeaterState(data);
                this.convertUNIXTimeSunrise(data);
                this.convertUNIXTimeSunset(data);
            })
    }
    createWeaterState = data => {
        const { coord, weather, main, visibility, sys, wind } = data;
        const res = { coord, weather, main, visibility, sys, wind };
        this.setState({ weather: res })
    }
    convertUNIXTimeSunrise = (data) => {
        let { sys } = data;
        const unix = new Date(sys.sunset * 1000);
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
        // return timeSunrise;
        this.setState({sunrise: timeSunrise })
    }
    render() {
        // console.log(this.state.weather.wind)
        return (
            <div className="weather">
                <h1 id='country'>{this.state.cityName}</h1>
                <div id='temp'>{(this.state.weather.main.temp - 273.15).toFixed(1)}</div>
                <div id='feels_like'>{(this.state.weather.main.feels_like - 273.15).toFixed(1)}</div>
                <div id='wisibility'>{this.state.weather.visibility}</div>
                <div id='wind-speed'>{this.state.weather.wind.speed}</div>
                <div id='pressure'>{this.state.weather.main.pressure}</div>
                {/* <div id='sunrise'>{this.state.sunrise}</div> */}
                <div id='sunset'></div>
            </div>
        );
    }
}
export default Weather;