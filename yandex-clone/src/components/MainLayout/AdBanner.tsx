import React from 'react';

interface AdBannerProps {
  content?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ content = "Рекламный баннер" }) => {
  return (
    <div style={{
      padding: '20px',
      border: '2px dashed #ff9800',
      backgroundColor: '#fff3e0',
      margin: '20px 0',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{content}</div>
      <div style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        Здесь может быть ваша реклама
      </div>
    </div>
  );
};
