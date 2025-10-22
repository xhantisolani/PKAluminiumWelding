// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation(); 

  useEffect(() => {
    // Scrolls the window to the top (0, 0) on every route change
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
}