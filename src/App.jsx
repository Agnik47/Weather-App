import React, { useState, useEffect } from "react";
import Temprature from "./components/Temprature";
import Highlights from "./components/Highlights";

function App() {
  const [city, setCity] = useState("Bangalore");
  const [weatherData, setweatherData] = useState(null);
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=573c8ae83da84ba89ee85231240803&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setweatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <div className="bg-[#1F213A] h-screen flex justify-center items-top">
      <div className="mt-40 w-1/5 h-1/3">
        <Temprature
          setCity={setCity}
          stats={
            weatherData
              ? {
                  temp: weatherData.current.temp_c,
                  condition: weatherData.current.condition.text,
                  isDay: weatherData.current.is_day,
                  location: weatherData.location.name,
                  time: weatherData.location.localtime,
                }
              : null
          }
        />
      </div>

      <div className="mt-40 w-1/3 h-1/3 grid grid-cols-2 gap-6">
        <h2 className="p-10 text-slate-200 text-2xl col-span-2">
          Today's Highlights
        </h2>

        {weatherData && (
          <>
            <Highlights
              stats={{
                title: "Wind Status",
                value: weatherData.current.wind_mph,
                unit: "mph",
                direction: weatherData.current.wind_dir,
                windDegree: weatherData.current.wind_degree,
              }}
            />

            <Highlights
              stats={{
                title: "Humidity",
                value: weatherData.current.humidity,
                unit: "%",
              }}
            />

            <Highlights
              stats={{
                title: "Visibility",
                value: weatherData.current.vis_miles,
                unit: "mile",
              }}
            />

            <Highlights
              stats={{
                title: "Air Pressure",
                value: weatherData.current.pressure_mb,
                unit: "mb",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
