import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = ({ visible, isScrolling = false }) => {
  const [showIndicator, setShowIndicator] = useState(false);
  
  useEffect(() => {
    if (visible && !isScrolling) {
      setShowIndicator(true);
      
      const timer = setTimeout(() => {
        setShowIndicator(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    } else {
      const hideTimer = setTimeout(() => {
        setShowIndicator(false);
      }, 300);
      
      return () => clearTimeout(hideTimer);
    }
  }, [visible, isScrolling]);
  
  if (!showIndicator && !visible) return null;
  
  return (
    <div className={`scroll-indicator ${!visible ? 'hidden' : ''}`}>
      <span>Scroll for more</span>
      <div className="scroll-arrow"></div>
    </div>
  );
};

export default ScrollIndicator; 