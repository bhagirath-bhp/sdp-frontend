import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }: any) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger scroll effect when location pathname changes

  // Render children components
  return children;
};

export default ScrollToTop;
