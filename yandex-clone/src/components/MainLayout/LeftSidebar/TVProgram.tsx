import React from 'react';
import type { TVProgramItem } from '../../../types';

interface TVProgramProps {
  programs: TVProgramItem[];
  title?: string;
}

export const TVProgram: React.FC<TVProgramProps> = ({ programs, title = "Телепрограмма" }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px 0' }}>
      <h3>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {programs.map((program, index) => (
          <li key={index} style={{ margin: '5px 0', display: 'flex', gap: '10px' }}>
            <span style={{ color: '#666' }}>{program.time}</span>
            <span style={{ fontWeight: 'bold' }}>{program.channel}</span>
            <span>{program.program}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
