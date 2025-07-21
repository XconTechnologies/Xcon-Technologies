import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { scrollToTopInstant } from '@/utils/scroll';

export const useScrollRestoration = () => {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top instantly when route changes
    scrollToTopInstant();
  }, [location]);
};