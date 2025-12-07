import React from 'react';
import type { BroadcastItem } from '../../../types';

interface BroadcastProps {
  broadcasts: BroadcastItem[];
  title?: string;
}

export const Broadcast: React.FC<BroadcastProps> = ({ broadcasts, title = "Эфир" }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #9c27b0', margin: '10px 0' }}>
      <h3>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {broadcasts.map((broadcast) => (
          <li key={broadcast.id} style={{ 
            margin: '8px 0',
            padding: '5px',
            borderLeft: '3px solid #9c27b0'
          }}>
            <div style={{ fontWeight: 'bold' }}>{broadcast.title}</div>
            <div style={{ color: '#666' }}>{broadcast.channel}</div>
            {broadcast.description && (
              <div style={{ fontSize: '12px', color: '#999' }}>{broadcast.description}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
