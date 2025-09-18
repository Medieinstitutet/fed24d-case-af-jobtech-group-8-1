import { useState, useEffect } from 'react';

export const useScreenSize = () => {
  // Set initial state based on current window size (if available)
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [isTablet, setIsTablet] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1400 : false
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1400);
    };

    // Call once to set initial state
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return { isMobile, isTablet };
};
