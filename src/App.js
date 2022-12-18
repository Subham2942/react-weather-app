
import './App.css';
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import { useEffect, useState } from 'react';
import getWeatherData from './Services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FaSadTear} from 'react-icons/fa'

function App() {

  const [query, setQuery] = useState("Tokyo");
  const [unit, setUnit ] = useState("metric");
  const [weather, setWeather] = useState(null);


  useEffect(()=> {
    const fetchWeather = async()=>{
      toast.info("Fetching Weather...")
      await getWeatherData( 'forecast', {q: query})
      .then(data => {
        toast.success(`Successfully fetched weather for ${data.location.name}` )
        setWeather(data)
      })
      .catch(err=>{
        toast.error("City Not Found!");
        setWeather(null);
      })
    }
    fetchWeather();
  }, [query]);
 

  
  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 
    bg-gradient-to-br from-violet-700 to-red-700 h-fit 
    shadow-xl shadow-gray-400">
      <TopButtons setQuery={setQuery} />
      <Inputs unit={unit} setUnit={setUnit} setQuery={setQuery} />

      { weather ?  (
        <div>
            <TimeAndLocation weather={weather}  />
            <TemperatureAndDetails weather={weather} unit={unit}/>
            <Forecast title={"Hourly Forecast"} weather={weather} unit = {unit} />
        </div>
      ) : <h1 className="text-white font-thin text-3xl text-center my-10 flex justify-center gap-5 ">City not found <span><FaSadTear/></span> </h1>   }
      
      <ToastContainer autoClose={1500} theme={"colored"} newestOnTop />
      </div>
  );
}

export default App;
