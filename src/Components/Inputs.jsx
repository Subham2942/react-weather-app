import React from "react";

import { FaSearch } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Inputs = () => {
  return (
    <div className="flex felx-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search for city..."
          className="text-xl p-2 font-light w-full shadow-xl outline-none capitalize placeholder:lowercase"
        />
        <FaSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <ImLocation
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light">
            °C
        </button>
        <p className="text-white text-xl mx-1" >|</p>
        <button name="imperial" className="text-xl text-white font-light">
            °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
