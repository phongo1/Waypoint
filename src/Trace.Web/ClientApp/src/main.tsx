import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type WeatherForecast = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

function App() {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/weatherforecast')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        return response.json() as Promise<WeatherForecast[]>;
      })
      .then(setForecasts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="app-shell">
      <section className="intro">
        <p className="eyebrow">React + ASP.NET Core</p>
        <h1>Waypoint</h1>
        <p>
          The frontend is now a React app served by Vite in development and by
          ASP.NET Core after publishing.
        </p>
      </section>

      <section className="panel" aria-labelledby="forecast-heading">
        <div className="panel-header">
          <h2 id="forecast-heading">API Check</h2>
          <span>{isLoading ? 'Loading' : `${forecasts.length} rows`}</span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Temp. C</th>
                <th>Temp. F</th>
                <th>Summary</th>
              </tr>
            </thead>
            <tbody>
              {forecasts.map((forecast) => (
                <tr key={forecast.date}>
                  <td>{new Date(forecast.date).toLocaleDateString()}</td>
                  <td>{forecast.temperatureC}</td>
                  <td>{forecast.temperatureF}</td>
                  <td>{forecast.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
