import React from 'react'

import{ FaArrowUp, 
        FaArrowDown, 
        FaTemperatureLow, 
        FaWind
    } from 'react-icons/fa';
import {TbSunset} from 'react-icons/tb';
import {BsDroplet, BsSun} from 'react-icons/bs';

const TemperatureAndDetails = () => {
  return (
    <>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>Clear</p>
        </div>
        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="clear" className='w-20' />
            <p className='text-5xl'>34°</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                    <FaTemperatureLow size={18} className="mr-1" />
                    Real fell:
                    <span className='font-medium ml-1'>32°</span>

                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <BsDroplet size={18} className="mr-1" />
                    Humidity:
                    <span className='font-medium ml-1'>65%</span>

                </div>

                <div className="flex font-light text-sm items-center justify-center">
                    <FaWind size={18} className="mr-1" />
                    Wind:
                    <span className='font-medium ml-1'>3 km/h</span>

                </div>
            </div>
        </div>

        <div className="flex flex-row items-center justify-center text-sm text-white py-3 space-x-2">
            <BsSun/>
            <p className='font-light'> Rise: <span className='font-medium ml-1' > 06:45 AM </span> </p>
            <p className='font-light' >|</p>
            <TbSunset/>
            <p className='font-light'> Set: <span className='font-medium ml-1' > 07:35 PM </span> </p>
            <p className='font-light' >|</p>
            <FaArrowUp/>
            <p className='font-light'> High: <span className='font-medium ml-1' > 45° </span> </p>
            <p className='font-light' >|</p>
            <FaArrowDown/>
            <p className='font-light'> low: <span className='font-medium ml-1' > 32° </span> </p>
        </div>
    </>
  )
}

export default TemperatureAndDetails