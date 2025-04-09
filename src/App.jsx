// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Card from './card';
import CardDetail from './CardDetail'; // The new detail page
import MediaPage from './MediaPage';
import ProfilePage from './ProfilePage';
import ScrollIndicator from './ScrollIndicator';

// Developer toggle for scroll indicator
const SCROLL_INDICATOR_ENABLED = true; // Set to false to disable the scroll indicator

function App() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('plan');
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const mainContentRef = useRef(null);
  const idleTimerRef = useRef(null);
  const firstVisitRef = useRef(true);
  const lastActivityTimeRef = useRef(Date.now());
  const scrollTimeoutRef = useRef(null);

  // Update current page based on location
  useEffect(() => {
    const path = location.pathname;
    if (path === '/' || path.startsWith('/card/')) {
      setCurrentPage('plan');
    } else if (path === '/media') {
      setCurrentPage('media');
    } else if (path === '/profile') {
      setCurrentPage('profile');
    }
  }, [location]);

  // Fetch card data from JSON once on mount
  useEffect(() => {
    fetch('/data/cards.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching card data:', error));
  }, []);

  // Show indicator on first visit
  useEffect(() => {
    if (firstVisitRef.current && SCROLL_INDICATOR_ENABLED) {
      firstVisitRef.current = false;
      setShowScrollIndicator(true);
    }
  }, []);

  // Handle user activity tracking
  useEffect(() => {
    const handleActivity = () => {
      lastActivityTimeRef.current = Date.now();
      
      // Clear any existing idle timer
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }
    };

    // Add event listeners for user activity
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  // Handle scroll detection and idle timer
  useEffect(() => {
    const handleScrollStart = () => {
      setIsScrolling(true);
      setShowScrollIndicator(false);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };
    
    const handleScroll = () => {
      if (mainContentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = mainContentRef.current;
        const isScrollable = scrollHeight > clientHeight;
        
        const timeSinceLastActivity = Date.now() - lastActivityTimeRef.current;
        if (timeSinceLastActivity > 3000 && isScrollable && !isScrolling && SCROLL_INDICATOR_ENABLED) {
          if (!idleTimerRef.current) {
            idleTimerRef.current = setTimeout(() => {
              setShowScrollIndicator(true);
              idleTimerRef.current = null;
            }, 3000);
          }
        }
      }
    };

    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.addEventListener('wheel', handleScrollStart);
      mainContent.addEventListener('touchmove', handleScrollStart);
      mainContent.addEventListener('scroll', handleScroll);
      
      handleScroll();
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener('wheel', handleScrollStart);
        mainContent.removeEventListener('touchmove', handleScrollStart);
        mainContent.removeEventListener('scroll', handleScroll);
      }
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

  const handlePlanClick = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleMediaClick = () => {
    navigate('/media');
  };

  return (
    <div className="app-container" role="application">
      {/* SIDEBAR */}
      <aside className="sidebar" role="complementary" aria-label="Main navigation">
        <div 
          className="profile-section" 
          onClick={handleProfileClick}
          role="button"
          tabIndex="1"
          aria-label="Profile for Laura King"
        >
          <img
            src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8="
            alt="Profile picture of Laura King"
            className="profile-pic"
          />
          <h3 className="profile-name">Laura King</h3>
        </div>
        <nav className="sidebar-menu" role="navigation" aria-label="Sidebar navigation">
          <button 
            className="sidebar-btn plan-btn" 
            onClick={handlePlanClick}
            tabIndex="8"
            aria-label="Plan"
            aria-current={currentPage === 'plan' ? 'page' : undefined}
          >
            <img 
              src="/icons/edit.svg" 
              alt="" 
              className="sidebar-icon"
              aria-hidden="true"
            /> Plan
            {currentPage === 'plan' && <div className="underline" aria-hidden="true"></div>}
          </button>
          <button 
            className="sidebar-btn goals-btn"
            tabIndex="9"
            aria-label="Goals"
            aria-current={currentPage === 'goals' ? 'page' : undefined}
          >
            <img 
              src="/icons/event_lists.svg" 
              alt="" 
              className="sidebar-icon"
              aria-hidden="true"
            /> Goals
            {currentPage === 'goals' && <div className="underline" aria-hidden="true"></div>}
          </button>
          <button 
            className="sidebar-btn notes-btn"
            tabIndex="10"
            aria-label="Notes"
            aria-current={currentPage === 'notes' ? 'page' : undefined}
          >
            <img 
              src="/icons/sticky_note_2.svg" 
              alt="" 
              className="sidebar-icon"
              aria-hidden="true"
            /> Notes
            {currentPage === 'notes' && <div className="underline" aria-hidden="true"></div>}
          </button>
        </nav>
      </aside>

      {/* MOBILE PROFILE SECTION */}
      <div className="mobile-profile-section" role="banner">
        <button 
          className="mobile-profile-button" 
          onClick={handleProfileClick}
          tabIndex="1"
          aria-label="Profile for Laura King"
        >
          <img
            src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8="
            alt="Profile picture of Laura King"
            className="mobile-profile-pic"
          />
          <h3 className="mobile-profile-name">Laura King</h3>
        </button>
      </div>

      {/* NAV BAR */}
      <nav className="top-menu" role="navigation" aria-label="Top navigation">
        <div 
          className="menu-item messages"
          tabIndex="2"
          role="button"
          aria-label="Messages"
          aria-current={currentPage === 'messages' ? `page: Messages` : undefined}
        >
          <img
            src="/icons/mail.svg"
            alt=""
            className="menu-icon"
            aria-hidden="true"
          />
          Messages
          {currentPage === 'messages' && <div className="underline" aria-hidden="true"></div>}
        </div>
        <div 
          className="menu-item media" 
          onClick={handleMediaClick}
          tabIndex="3"
          role="button"
          aria-label="Media"
          aria-current={currentPage === 'media' ? `page: Media` : undefined}
        >
          <img
            src="/icons/photo_camera.svg"
            alt=""
            className="menu-icon"
            aria-hidden="true"
          />
          Media
          {currentPage === 'media' && <div className="underline" aria-hidden="true"></div>}
        </div>
        <div 
          className="menu-item calendar"
          tabIndex="4"
          role="button"
          aria-label="Calendar"
          aria-current={currentPage === 'calendar' ? `page: Calendar` : undefined}
        >
          <img
            src="/icons/calendar.svg"
            alt=""
            className="menu-icon"
            aria-hidden="true"
          />
          Calendar
          {currentPage === 'calendar' && <div className="underline" aria-hidden="true"></div>}
        </div>
        <div 
          className="menu-item plan-btn" 
          onClick={handlePlanClick}
          tabIndex="5"
          role="button"
          aria-label="Plan"
          aria-current={currentPage === 'plan' ? `page: Plan` : undefined}
        >
          <img
            src="/icons/edit.svg"
            alt=""
            className="menu-icon"
            aria-hidden="true"
          />
          Plan
          {currentPage === 'plan' && <div className="underline" aria-hidden="true"></div>}
        </div>
        <div 
          className="menu-item goals-btn"
          tabIndex="6"
          role="button"
          aria-label="Goals"
          aria-current={currentPage === 'goals' ? `page: Goals` : undefined}
        >
          <img
            src="/icons/event_lists.svg"
            alt=""
            className="menu-icon"
            aria-hidden="true"
          />
          Goals
          {currentPage === 'goals' && <div className="underline" aria-hidden="true"></div>}
        </div>
        <div 
          className="menu-item notes-btn"
          tabIndex="7"
          role="button"
          aria-label="Notes"
          aria-current={currentPage === 'notes' ? `page: Notes` : undefined}
        >
          <img
            src="/icons/sticky_note_2.svg"
            alt=""
            className="menu-icon"
            aria-hidden="true"
          />
          Notes
          {currentPage === 'notes' && <div className="underline" aria-hidden="true"></div>}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main 
        className="main-content" 
        ref={mainContentRef}
        role="main"
        aria-label="Plan sections navigation"
      >
        {/* Define our routes here */}
        <Routes>
          {/* HOME / CARD GRID */}
          <Route
            path="/"
            element={
              <div className="cards-grid" role="list" aria-label="Plan Sections">
                {cards.map((item) => (
                  <Link
                    key={item.id}
                    to={`/card/${item.id}`}
                    style={{ textDecoration: 'none' }}
                    role="button"
                    aria-label={`${item.title} section`}
                  >
                    <Card title={item.title} image={item.image} />
                  </Link>
                ))}
              </div>
            }
          />

          {/* DETAIL PAGE FOR EACH CARD */}
          <Route path="/card/:id" element={<CardDetail />} />
          
          {/* MEDIA PAGE */}
          <Route path="/media" element={<MediaPage />} />
          
          {/* PROFILE PAGE */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>

      {SCROLL_INDICATOR_ENABLED && (
        <ScrollIndicator 
          visible={showScrollIndicator} 
          isScrolling={isScrolling}
        />
      )}

      {/* Branding */}
      <div className="branding-top-right">
        <img
          src="https://aspirico.com/wp-content/uploads/2023/01/iplanit-with-tagline-01-011.png"
          alt="iplanit"
          aria-label={`iplanit - ${currentPage === 'plan' ? 'Plan Sections' : currentPage === 'media' ? 'Media Page' : 'Profile Page'}`}
          className="branding-logo"
        />
      </div>

      <div className="sjogbranding">
        <img
          src="https://www.sjog.ie/wp-content/uploads/2024/01/Parent.svg"
          alt="Saint John of God"
          className="branding-logo"
        />
      </div>

    </div>
  );
}

// Wrap the App component with Router to provide navigation context
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
