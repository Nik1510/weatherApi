import {useEffect,useState} from 'react'

function useWeatherInfo(currentCity){
    const [weatherData, setWeatherData] = useState(null);
    const [error,setError] = useState(null);
     const apiKey = import.meta.env.VITE_API_KEY;
    useEffect(()=>{
        if (!currentCity) return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`)
        .then((respnse)=>respnse.json())
        .then((data)=>{
            if(data.cod===200){
                console.log(data);
                setWeatherData(data);
                setError(null);
            }else{
                setWeatherData(null);
                setError(data.message || "City Not Found")
            }
            
        })
        .catch((err)=>{
            console.log("Error",err);
            setWeatherData(null);
        })
    },[currentCity])
    return {weatherData,error};
}
export default useWeatherInfo;
