import React, { useState, useEffect } from 'react';
import { FaArrowUp  } from 'react-icons/fa';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 300); // Affiche le bouton lorsque le scroll dépasse les 300 pixels
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 bg-orange-600 text-white rounded-full cursor-pointer ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp  size={20} />
    </div>
  );
};

export default ScrollTopButton;