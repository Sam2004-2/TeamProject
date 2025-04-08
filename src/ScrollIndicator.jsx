import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = ({ visible, isScrolling = false }) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [isFading, setIsFading] = useState(false);
  
  useEffect(() => {
    // Clear any existing timers when the effect runs
    let hideTimer = null;
    
    if (visible && !isScrolling) {
      // Reset fading state and show the indicator immediately
      setIsFading(false);
      setShowIndicator(true);
      
      // Set a timer to start fading out after 5 seconds
      hideTimer = setTimeout(() => {
        setIsFading(true);
        
        // After the fade-out animation completes, remove the indicator from the DOM
        setTimeout(() => {
          setShowIndicator(false);
        }, 300); // Match the CSS transition duration
      }, 5000);
    } else {
      // If we need to hide the indicator due to scrolling, start fading out
      setIsFading(true);
      
      // After the fade-out animation completes, remove the indicator from the DOM
      hideTimer = setTimeout(() => {
        setShowIndicator(false);
      }, 300); // Match the CSS transition duration
    }
    
    // Cleanup function to clear the timer when the component unmounts or when dependencies change
    return () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [visible, isScrolling]);
  
  // Only render the indicator if it should be shown
  if (!showIndicator) return null;
  
  return (
    <div className={`scroll-indicator ${isFading ? 'hidden' : ''}`}>
      <span>Scroll for more</span>
      <div className="scroll-arrow"></div>
    </div>
  );
};

export default ScrollIndicator; 