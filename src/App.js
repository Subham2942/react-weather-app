
import './App.css';
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './Services/weatherService'
import { useEffect, useState } from 'react';
import getWeatherData from './Services/weatherService';

function App() {

  const [query, setQuery] = useState("Rourkela");
  const [unit, setUnit ] = useState("metric");
  const [weather, setWeather] = useState(null);

  // const fetchWeather = async()=>{
  //   const data = await getWeatherData( 'forecast', {q: "Rourkela"});
  //   console.log(data);
  // }

  // fetchWeather();

  useEffect(()=> {
    const fetchWeather = async()=>{
      const data = await getWeatherData( 'forecast', {q: "New York"});
      setWeather(data);

      
    }
    fetchWeather();
  }, [query]);
  console.log(weather);
 

  // useEffect(() =>{
  //   const fetchWeather = async()=>{
  //       await getFormattedWeatherData({...query})
  //       .then(data =>{
  //         setWeather(data);
  //       })
  //       // console.log(data);
  //     }
  // }, [query, unit]);


  // useEffect(()=>{
  //   const fetchWeather = async() =>{
  //     const data = await getWeatherData('forecast', {q: "Rourkela"})
  //     setWeather(data);
  //   }
  //   console.log(weather);
  // }, [query])
  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 
    bg-gradient-to-br from-cyan-700 to-blue-700 h-fit 
    shadow-xl shadow-gray-400">
      <TopButtons/>
      <Inputs />

      { weather && (
        <div>
            <TimeAndLocation weather={weather}  />
            <TemperatureAndDetails weather={weather} units={unit}/>
            <Forecast title={"Hourly Forecast"} weather={weather} />
            <Forecast title={"Daily Forecast"} weather={weather} />
        </div>
      )}
      
 
      </div>
  );
}

export default App;
