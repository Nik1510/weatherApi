import React from 'react'
import useWeatherInfo from '../hooks/useWeather';
import { useState } from 'react';
function InputBox() {

    const [city,setCity] =useState('');
    const [serachCity,setSearchCity] = useState('');
    const {weatherData,error} = useWeatherInfo(serachCity);

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(city.trim()){
            console.log(city);
            setSearchCity(city);
        }
    }

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Check Live Weather</h5>
        <div>
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter City
          </label>
          <input
            type="text"
            name="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter City Name"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
            rounded-lg text-sm px-5 py-2.5 text-center 
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      {
        error &&(
        <div className="mt-4 text-red-500 font-medium">
          ❌ {error}
        </div>
      )
      }

      {weatherData && (
        <div className="mt-4 text-white">
          <h3 className="text-lg font-semibold">{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
          <p>Wind Speed : {weatherData.wind.speed} km/h</p>
            <p>🌅 Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>🌇 Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
}

export default InputBox;