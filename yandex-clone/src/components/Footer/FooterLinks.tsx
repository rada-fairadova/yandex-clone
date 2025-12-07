import React from 'react';

interface FooterLinksProps {
  links?: Array<{ text: string; url: string }>;
  copyright?: string;
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ 
  links = [], 
  copyright = "© 2023 Мой Яндекс Клон" 
}) => {
  return (
    <footer style={{ 
      padding: '20px', 
      borderTop: '1px solid #ddd', 
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        {links.map((link, index) => (
          <a key={index} href={link.url} style={{ margin: '0 10px', textDecoration: 'none' }}>
            {link.text}
          </a>
        ))}
      </div>
      <div style={{ color: '#666' }}>{copyright}</div>
    </footer>
  );
};
