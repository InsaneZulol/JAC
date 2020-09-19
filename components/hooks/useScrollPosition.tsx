import { useRef, useEffect } from 'react'

const isBrowser = typeof window !== `undefined`;

const getScrollPosition = () => {
    if (!isBrowser) return { 
        x: 0,
        y: 0
     };
    return {
        x: window.scrollX,
        y: window.scrollY
    };
}

/// Get window scroll position in Y axis
// First arg: object {previous position, current position}
// Second arg: dependecies
// Third arg: timeout for rerender in ms
export const useScrollPosition = (effect, deps, wait: number) => {
    const position = useRef(getScrollPosition()); // using ref cause simply using useState triggers rerender and it was rerendering on every scroll pixel by pixel xd
  
    let throttleTimeout: number = null;
  
    const callback = () => {
      const currPos = getScrollPosition();
      effect({ prevPos: position.current, currPos });
      position.current = currPos;
      throttleTimeout = null;
    }

    useEffect(() => {
        const handleScroll = () => {
          if (wait) {
            if (throttleTimeout === null) {
              throttleTimeout = window.setTimeout(callback, wait);
            }
          } else {
            callback();
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, deps);
    }