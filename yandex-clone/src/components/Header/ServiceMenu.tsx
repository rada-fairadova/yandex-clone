import React from 'react';
import type { MenuItem } from '../../types';

interface ServiceMenuProps {
  services: MenuItem[];
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({ services }) => {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', border: '1px solid #eee' }}>
      {services.map((service) => (
        <a key={service.id} href={service.link} style={{ textDecoration: 'none' }}>
          {service.title}
        </a>
      ))}
    </nav>
  );
};
