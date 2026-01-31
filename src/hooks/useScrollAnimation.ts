import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
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
        rootMargin: '100px 0px -50px 0px', // Increased top margin for better mobile detection
      }
    );

    if (currentRef) {
      observer.observe(currentRef);

      // Fallback: if element is already in viewport on mount, show it
      const rect = currentRef.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight * 1.5 && rect.bottom > -100;
      if (isInViewport) {
        setIsVisible(true);
      } else {
        // Fallback timeout: show content after 1 second if observer hasn't fired
        // This ensures content is visible even if IntersectionObserver has issues
        timeoutId = setTimeout(() => {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }, 1000);
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