import React from 'react';

const BunnyDecoration = () => (
  <div className="absolute bottom-20 right-32">
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <ellipse cx="50" cy="70" rx="20" ry="25" fill="#E5D5F5" stroke="#B4A7D6" strokeWidth="2" />
      <circle cx="50" cy="35" r="18" fill="#E5D5F5" stroke="#B4A7D6" strokeWidth="2" />
      <ellipse cx="42" cy="20" rx="6" ry="15" fill="#E5D5F5" stroke="#B4A7D6" strokeWidth="2" />
      <ellipse cx="58" cy="20" rx="6" ry="15" fill="#E5D5F5" stroke="#B4A7D6" strokeWidth="2" />
      <circle cx="45" cy="32" r="2" fill="#B4A7D6" />
      <circle cx="55" cy="32" r="2" fill="#B4A7D6" />
      <circle cx="50" cy="38" r="1.5" fill="#B4A7D6" />
    </svg>
  </div>
);

export default BunnyDecoration;