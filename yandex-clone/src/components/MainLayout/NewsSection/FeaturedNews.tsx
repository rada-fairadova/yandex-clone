import React from 'react';
import type { INewsItem } from '../../../types';

interface FeaturedNewsProps {
  news: INewsItem;
}

export const FeaturedNews: React.FC<FeaturedNewsProps> = ({ news }) => {
  return (
    <div style={{ 
      padding: '15px', 
      border: '2px solid #ffcc00', 
      backgroundColor: '#fffde7',
      margin: '10px 0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <span style={{ fontSize: '20px' }}>⭐</span>
        <span style={{ fontWeight: 'bold', color: '#d84315' }}>Рекомендуем</span>
      </div>
      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
        <a href={news.link} style={{ textDecoration: 'none', color: '#333' }}>
          {news.title}
        </a>
      </div>
    </div>
  );
};
