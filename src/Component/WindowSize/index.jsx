import { useState, useEffect } from "react";

function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isPhoneScreen, setIsPhoneScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      setIsPhoneScreen(newWindowWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    windowWidth,
    isPhoneScreen,
  };
}

export default WindowSize;
