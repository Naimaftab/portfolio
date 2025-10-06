import React from 'react';
import { 
  Citrus,
} from 'lucide-react';

const Footer = () => (
  <footer className="py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
    <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">

      <p>&copy; 2025 Portfolio créé par Naima avec passion <Citrus className="w-5 h-5 inline" style={{ color: '#f9da65' }} inline/></p>
    </div>
  </footer>
);

export default Footer;