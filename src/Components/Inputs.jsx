import React from "react";

import { FaSearch } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { useState } from "react";

const Inputs = ({ unit, setUnit, setQuery }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = e => {
    e.preventDefault();
    if (city !== "") setQuery(city);
    setCity("");
  };
  return (
    <div className="flex felx-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">

        <form action="" className="flex justify-around w-full" onSubmit={handleSearchClick}>
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="search for city..."
            className="text-xl p-2 font-light w-10/12 shadow-xl outline-none capitalize placeholder:lowercase "
          />
          <button type="submit" className="text-white cursor-pointer transition ease-out hover:scale-125">
            <FaSearch size={20}/>
          </button>
        </form>
        
        
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          onClick={() => setUnit("metric")}
          className={
            unit === "metric"
              ? `text-xl text-white font-bold`
              : `text-xl text-white font-light`
          }
        >
          °C
        </button>
        <p className="text-white text-xl mx-1">|</p>
        <button
          name="imperial"
          onClick={() => setUnit("imperial")}
          className={
            unit === "imperial"
              ? `text-xl text-white font-bold`
              : `text-xl text-white font-light`
          }
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
