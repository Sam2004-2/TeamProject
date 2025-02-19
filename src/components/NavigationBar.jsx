import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"; 

export function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div
        className="navbar-container"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "75px",
          padding: "0 20px",
        }}
      >
        {/* Left Section */}
        <div className="navbar-left">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ float: "none" }}>
              <Link to="/" className="my-plan">
                My Plan
              </Link>
            </li>
            <li style={{ float: "none" }}>
              <Link to="/" className="action-plan">
                Action Plan
              </Link>
            </li>
            <li style={{ float: "none" }}>
              <Link to="/" className="mail-notes">
                Mail / Notes
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Title */}
        <div className="navbar-center">
          <h1 className="nav-title" style={{ margin: 0, fontSize: "1.5rem" }}>
            IPlanit
          </h1>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ float: "none" }}>
              <Link to="/" className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "36px", height: "36px" }}
                >
                  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li style={{ float: "none" }}>
              <Link to="/" className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "36px", height: "36px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li style={{ float: "none" }}>
              <Link to="/" className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "36px", height: "36px" }}
                >
                  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                </svg>
              </Link>
            </li>
            <li style={{ float: "none" }}>
              <Link to="/" className="nav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "36px", height: "36px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li style={{ float: "none" }}>
              <Link to="/" className="logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar-menu" id="navbar-menu">
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                My Plan
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Action Plan
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Mail / Notes
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Icon 1
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Icon 2
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Icon 3
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Icon 4
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
