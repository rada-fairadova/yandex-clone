import React from 'react';

interface MapWidgetProps {
  location: string;
  title?: string;
}

export const MapWidget: React.FC<MapWidgetProps> = ({ location, title = "Карта" }) => {
  return (
    <div style={{ 
      padding: '15px', 
      border: '1px solid #2196f3', 
      margin: '10px 0',
      backgroundColor: '#e3f2fd'
    }}>
      <h3>{title} {location}</h3>
      <div style={{ 
        height: '150px', 
        backgroundColor: '#bbdefb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        🗺️ Карта {location}
      </div>
      <div style={{ marginTop: '10px' }}>
        <a href="#">Расписания</a>
      </div>
    </div>
  );
};
