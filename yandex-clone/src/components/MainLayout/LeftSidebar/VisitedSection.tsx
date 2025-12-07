import React from 'react';
import type { MenuItem } from '../../../types';

interface VisitedSectionProps {
  items: MenuItem[];
  title?: string;
}

export const VisitedSection: React.FC<VisitedSectionProps> = ({ items, title = "Посещаемое" }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px 0' }}>
      <h3>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ margin: '8px 0' }}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
