import React from 'react';
import type { Rate } from '../../../types';

interface FinanceRatesProps {
  rates: Rate[];
  title?: string;
}

export const FinanceRates: React.FC<FinanceRatesProps> = ({ rates, title = "Курсы" }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #4caf50', margin: '10px 0' }}>
      <h3>{title}</h3>
      <div>
        {rates.map((rate, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            padding: '5px 0',
            borderBottom: '1px solid #eee'
          }}>
            <span style={{ fontWeight: 'bold' }}>{rate.name}</span>
            <span>{rate.value}</span>
            <span style={{ color: rate.change >= 0 ? 'green' : 'red' }}>
              {rate.change >= 0 ? '+' : ''}{rate.change} {rate.changePercent || ''}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
