import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const TopBackButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const show = /^(\/product\/|\/checkout|\/cart)/.test(location.pathname);
  if (!show) return null;

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Retour"
      className="fixed left-4 top-16 md:top-20 z-50 p-2 bg-background/80 backdrop-blur rounded-full shadow-sm hover:bg-background transition-colors"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );
};

export default TopBackButton;
