import React from "react";

const TimeAndLocation = ({ weather }) => {
  const time = weather.location.localtime;
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const name = weather.location.name;
  const country = weather.location.country;

  const date = time.slice(8, 10);
  const monthNum = time.slice(5, 7);
  const year = time.slice(0, 4);

  const exactTime = time.slice(10);

  let hour;
  let min;
  if (exactTime.length === 5) {
    hour = Number(exactTime.slice(0, 2));
    min = exactTime.slice(3, 5);
  } else if (exactTime.length === 6) {
    hour = Number(exactTime.slice(0, 3));
    min = exactTime.slice(4, 6);
  }

  const currTime = hour > 12 ? `${hour - 12}:${min} PM` : `${hour}:${min} AM`;

  const d = new Date(monthNum + " " + date + " " + year + " " + exactTime);

  const day = d.getDay();

  return (
    <>
      <div className="flex item-center justify-center my-6">
        <p className="text-white text-sm md:text-xl font-extralight">
          {`${daysOfWeek[Number(day)]}, ${date}th ${
            month[Number(monthNum - 1)]
          }, ${year} `}{" "}
          | Local Time: {currTime}
        </p>
      </div>
      <div className="flex item-center justify-center my-3">
        <p className="text-white text-lg md:text-2xl font-medium">
          {name}, {country}
        </p>
      </div>
    </>
  );
};

export default TimeAndLocation;
