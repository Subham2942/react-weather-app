import React from "react";

const Forecast = ({ title, weather, unit }) => {
  const forecastTime = weather.forecast.forecastday[0].hour;
  const hourlyForecast = [
    forecastTime[2],
    forecastTime[8],
    forecastTime[12],
    forecastTime[16],
    forecastTime[22],
  ];

  return (
    <>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>

      <hr className="my-2" />

      <div className="flex flex-row justify-between items-center text-white">
        {hourlyForecast.map((data) => {
          let temp;

          if (unit === "metric") {
            temp = Number(data.temp_c).toFixed() + "° C";
          } else {
            temp = Number(data.temp_f).toFixed() + "° F";
          }

          let time = data.time.slice(10);

          const hour = Number(time.slice(0, 3));
          const min = time.slice(4);

          time = hour > 12 ? `${hour - 12}:${min} PM` : `${hour}:${min} AM`;

          return (
            <div
              className="flex flex-col items-center justify-center"
              key={Math.random()}
            >
              <p className="font-light text-sm">{time}</p>
              <img src={data.condition.icon} alt="" className="w-12 my-1" />
              <p className="font-medium">{temp}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Forecast;
