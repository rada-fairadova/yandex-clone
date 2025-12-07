import React from 'react';
import type { WeatherData } from '../../../types';

interface WeatherWidgetProps {
  weather: WeatherData;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #4a90e2', margin: '10px 0' }}>
      <h3>{weather.description}</h3>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>+{weather.currentTemp}°</div>
      <div>Утром +{weather.morningTemp}, днём +{weather.dayTemp}</div>
    </div>
  );
};
