import { DateTime } from "luxon";

const API_KEY = "522bea771a50470e824151002221812";

const BASE_URL = "https://api.weatherapi.com/v1";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({
        key: API_KEY,
        ...searchParams

    });

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

const formatCurrentWeather = (data) => {
    const {
        coord: {
            lon,
            lat
        },
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity
        },
        weather,
        wind: {
            speed
        },
        sys: {
            country,
            sunrise,
            sunset
        },
        name,
        dt,
    } = data;

    const {
        main: details,
        icon
    } = weather[0];
    return {
        lat,
        lon,
        temp,
        feels_like,
        sunset,
        sunrise,
        country,
        humidity,
        temp_min,
        temp_max,
        name,
        dt,
        speed,
        details,
        icon
    }
}

const formatForcastWeather = (data)=>{
    let {timezone, daily, hourly} = data;
    daily = daily?.slice(1, 6).map(d =>{
        return{
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weatyher[0].icon
        }
    })
    hourly = hourly?.slice(1,6).map(d =>{
        return{
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon: d.weatyher[0].icon
        }
    })

    return {timezone, daily, hourly};
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedWeatherData = await getWeatherData('weather', searchParams).then(data => formatCurrentWeather(data));

    const {lat, lon} = formattedWeatherData;

    const formattedForcastWeather = await getWeatherData("forecast", {
        lat,
        lon,
        exclude: 'current, minutely, alerts',
        units: searchParams.units,
    }).then(formatForcastWeather);

    return {...formattedWeatherData, ...formattedForcastWeather};
};

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy '| Local time: ' hh:mm a")=>{
    return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
}

export default getFormattedWeatherData;