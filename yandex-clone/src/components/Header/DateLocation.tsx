import React from 'react';

interface DateLocationProps {
  location: string;
  date: string;
  time: string;
}

export const DateLocation: React.FC<DateLocationProps> = ({ location, date, time }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #eee' }}>
      <span>Сейчас в СМИ {location}</span>
      <span style={{ margin: '0 10px' }}>Рекомендуем</span>
      <span>{date}, {time}</span>
    </div>
  );
};
