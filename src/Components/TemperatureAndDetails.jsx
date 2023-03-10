import React from "react";

import {
  FaArrowUp,
  FaArrowDown,
  FaTemperatureLow,
  FaWind,
} from "react-icons/fa";
import { TbSunset } from "react-icons/tb";
import { BsDroplet, BsSun } from "react-icons/bs";

const TemperatureAndDetails = ({ weather, unit }) => {
  const condText = weather.current.condition.text;
  const condIcon = weather.current.condition.icon;

  let temp;
  let feelslike;
  let wind;
  let maxTemp;
  let minTemp;
  if (unit === "metric") {
    temp = Number(weather.current.temp_c).toFixed() + "° C";
    feelslike = Number(weather.current.feelslike_c).toFixed() + "° C";
    wind = Number(weather.current.wind_kph).toFixed() + " km/h";
    maxTemp =
      Number(weather.forecast.forecastday[0].day.maxtemp_c).toFixed() + "° C";
    minTemp =
      Number(weather.forecast.forecastday[0].day.mintemp_c).toFixed() + "° C";
  } else {
    temp = Number(weather.current.temp_f).toFixed() + "° F";
    feelslike = Number(weather.current.feelslike_f).toFixed() + "° F";
    wind = Number(weather.current.wind_mph).toFixed() + " mi/h";
    maxTemp =
      Number(weather.forecast.forecastday[0].day.maxtemp_f).toFixed() + "° F";
    minTemp =
      Number(weather.forecast.forecastday[0].day.mintemp_f).toFixed() + "° F";
  }

  const humidity = weather.current.humidity;

  const riseTime = weather.forecast.forecastday[0].astro.sunrise;
  const setTime = weather.forecast.forecastday[0].astro.sunset;

  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p> {condText} </p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={condIcon} alt="clear" className="w-24" />
        <p className="text-5xl">{temp}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureLow size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{feelslike}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <BsDroplet size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1"> {humidity}% </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <FaWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1"> {wind} </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center text-sm text-white py-3 space-x-2">
        <BsSun />
        <p className="font-light">
          {" "}
          Rise: <span className="font-medium ml-1">{riseTime} </span>{" "}
        </p>
        <p className="font-light">|</p>
        <TbSunset />
        <p className="font-light">
          {" "}
          Set: <span className="font-medium ml-1"> {setTime} </span>{" "}
        </p>
        <p className="font-light">|</p>
        <FaArrowUp />
        <p className="font-light">
          {" "}
          High: <span className="font-medium ml-1"> {maxTemp} </span>{" "}
        </p>
        <p className="font-light">|</p>
        <FaArrowDown />
        <p className="font-light">
          {" "}
          low: <span className="font-medium ml-1"> {minTemp} </span>{" "}
        </p>
      </div>
    </>
  );
};

export default TemperatureAndDetails;
