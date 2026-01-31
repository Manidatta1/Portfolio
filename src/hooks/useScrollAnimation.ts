import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Detect mobile devices - comprehensive detection
    const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768) ||
                     ('ontouchstart' in window) ||
                     (navigator.maxTouchPoints > 0);

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: show content immediately if IntersectionObserver is not supported
      setIsVisible(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can optionally unobserve to improve performance
          if (currentRef) {
            observer.unobserve(currentRef);
          }
          // Clear the timeout if observer fires
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        }
      },
      {
        threshold,
        rootMargin: isMobile ? '200px 0px -50px 0px' : '100px 0px -50px 0px', // Larger margin for mobile
      }
    );

    if (currentRef) {
      observer.observe(currentRef);

      // Fallback: if element is already in viewport on mount, show it
      const rect = currentRef.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight * 2 && rect.bottom > -200;
      if (isInViewport) {
        setIsVisible(true);
      } else {
        // More aggressive timeout for mobile: 300ms for mobile, 1s for desktop
        // This ensures content is visible quickly on mobile devices
        const timeoutDuration = isMobile ? 300 : 1000;
        timeoutId = setTimeout(() => {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }, timeoutDuration);
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};