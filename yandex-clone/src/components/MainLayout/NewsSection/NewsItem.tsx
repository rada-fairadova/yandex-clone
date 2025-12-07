import React from 'react';
import type { INewsItem } from '../../../types';

interface NewsItemProps {
  news: INewsItem;
}

export const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
    return (
      <div style={{ 
        padding: '8px 0', 
        borderBottom: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span style={{ fontSize: '18px' }}>{news.icon}</span>
        <a href={news.link} style={{ textDecoration: 'none', color: '#333' }}>
          {news.title}
        </a>
        {news.time && <span style={{ color: '#666', fontSize: '12px' }}>{news.time}</span>}
      </div>
    );
  };
