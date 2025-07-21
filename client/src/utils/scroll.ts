// Scroll to top utility function
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Immediate scroll to top without animation
export const scrollToTopInstant = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};