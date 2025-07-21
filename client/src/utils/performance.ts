// Performance optimization utilities

// Preload critical images with WebP support detection
export const preloadImages = (urls: string[]) => {
  // Check WebP support
  const webpSupport = (() => {
    try {
      return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } catch (e) {
      return false;
    }
  })();

  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    // Use WebP if supported and URL supports it
    if (webpSupport && url.includes('unsplash.com')) {
      link.href = url.replace(/&q=\d+/, '&q=75&fm=webp');
    } else {
      link.href = url;
    }
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
};

// Preload critical fonts
export const preloadFonts = () => {
  const fonts = [
    'https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT2XOZY8aBZMath.woff2'
  ];
  
  fonts.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Lazy load images with intersection observer
export const createImageObserver = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    return imageObserver;
  }
  return null;
};

// Debounce function for scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};