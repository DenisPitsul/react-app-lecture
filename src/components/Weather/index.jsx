import styles from "./Weather.module.css";
import { FaRegSun } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";

import React, { useEffect, useState } from "react";

const WATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&daily=temperature_2m_max,temperature_2m_min,precipitation_sum";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [forecastDaysCount, setForecastDaysCount] = useState(7);

  useEffect(() => {
    fetch(`${WATHER_API}${forecastDaysCount === 3 ? "&forecast_days=3" : ""}`)
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [forecastDaysCount]);

  return (
    <>
      <button onClick={() => setForecastDaysCount(3)}>3</button>
      <button onClick={() => setForecastDaysCount(7)}>7</button>
      <table>
        <caption>Weather forecast for {forecastDaysCount} days</caption>
        <thead>
          <tr>
            {weather?.daily?.time.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weather?.daily?.temperature_2m_min.map((t, index) => (
              <td key={index}>{t}</td>
            ))}
          </tr>
          <tr>
            {weather?.daily?.temperature_2m_max.map((t, index) => (
              <td key={index}>{t}</td>
            ))}
          </tr>
          <tr>
            {weather?.daily?.precipitation_sum.map((p, index) => (
              <td key={index}>{p}</td>
            ))}
          </tr>
          <tr>
            {weather?.daily?.precipitation_sum.map((p, index) => (
              <td key={index}>
                {p > 0 ? <MdOutlineWaterDrop /> : <FaRegSun />}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Weather;
