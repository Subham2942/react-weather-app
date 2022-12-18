import React from 'react'

const TopButtons = () => {

    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'New Delhi'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'New York'
        },
        {
            id: 5,
            title: 'Paris'
        }
    ]
  return (
    <div className="flex item-center justify-around my-6">
        {
            cities.map((city)=>{
                return (<button key={city.id} className="text-white text-lg font-medium">
                            {city.title}
                        </button>
            )})
        }
        
    </div>
  )
}

export default TopButtons