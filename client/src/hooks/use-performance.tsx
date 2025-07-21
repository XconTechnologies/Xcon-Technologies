import { useEffect } from 'react';
import { createImageObserver } from '@/utils/performance';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Create image observer for lazy loading
    const imageObserver = createImageObserver();
    
    // Observe all lazy images
    if (imageObserver) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Prefetch critical resources
    const prefetchLinks = [
      'https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT2XOZY8aBZMath.woff2'
    ];
    
    prefetchLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
    
    // Optimize scroll performance
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', optimizedScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedScroll);
      imageObserver?.disconnect();
    };
  }, []);
};