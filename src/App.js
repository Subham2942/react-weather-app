
import './App.css';
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './Services/weatherService'

function App() {

  // const fetchWeather = async()=>{
  //   const data = await getFormattedWeatherData( {q: "Rourkela"});
  //   console.log(data);
  // }

  // fetchWeather();

  const [query, setQuery] = useState({q: "Rourkela"});

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 
    bg-gradient-to-br from-cyan-700 to-blue-700 h-fit 
    shadow-xl shadow-gray-400">
      <TopButtons/>
      <Inputs/>
      
      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast title={"Hourly Forecast"} />
      <Forecast title={"Daily Forecast"} />
      </div>
  );
}

export default App;
