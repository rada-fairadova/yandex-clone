import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Найдётся всё. Например, фаза луны сегодня", 
  buttonText = "Найти" 
}) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', margin: '10px 0' }}>
      <input 
        type="text" 
        placeholder={placeholder}
        style={{ width: '80%', padding: '10px' }}
      />
      <button style={{ padding: '10px 20px', marginLeft: '10px' }}>
        {buttonText}
      </button>
    </div>
  );
};
