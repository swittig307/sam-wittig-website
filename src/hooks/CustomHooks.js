import { useState, useEffect } from 'react';

export const useWindowWidthAndHeight = () => {
  const windowDef = typeof window !== 'undefined';
  const w = windowDef ? window : { innerWidth: 800, innerHeight: 600 };

  let windowInnerSize = [w.innerWidth, w.innerHeight];
  let [windowSize, setWidowSize] = useState(windowInnerSize);

  useEffect(() => {
    const changeWindowSize = () => {
      setWidowSize([w.innerWidth, w.innerHeight]);
    }
    if(windowDef){
      window.addEventListener("resize", changeWindowSize);
      return () => window.removeEventListener('resize', changeWindowSize);
    } else {
      return () => {}
    }
  }, []);
  return windowSize;
}
