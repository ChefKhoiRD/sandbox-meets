import React, { useEffect, useState } from 'react';

export default function Modal({ children, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Adjust the timeout to match the transition duration
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isVisible ? 'opacity-50' : 'opacity-0'}`} onClick={handleClose}></div>
      <div className={`bg-neutral-900 rounded-lg shadow-lg p-6 z-50 max-w-lg w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        {children}
      </div>
    </div>
  );
}