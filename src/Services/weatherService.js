

const API_KEY = "522bea771a50470e824151002221812";

const BASE_URL = "https://api.weatherapi.com/v1";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType + '.json' );
    url.search = new URLSearchParams({
        key: API_KEY,
        days: '1',
        ...searchParams,
        aqi:'no',
        alerts: 'no',

    });

    return fetch(url)
    .then(res =>res.json())
    .then((data) => data);
};

export default getWeatherData;
