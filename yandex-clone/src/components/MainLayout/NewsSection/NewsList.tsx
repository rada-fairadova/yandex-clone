import React from 'react';
import type { INewsItem } from '../../../types';
import { NewsItem as NewsItemComponent } from './NewsItem';

interface NewsListProps {
  news: INewsItem[];
  title?: string;
}

export const NewsList: React.FC<NewsListProps> = ({ news, title }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      {title && <h2 style={{ marginBottom: '15px' }}>{title}</h2>}
      <div>
        {news.map((item) => (
          <NewsItemComponent key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};
