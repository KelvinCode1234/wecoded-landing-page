import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeContext } from "../ThemeContext";
import wecodedLogo from "../assets/wecoded-logo.webp";

const Header: React.FC = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext)!;
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const toggleNavbar = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const closeNavbar = () => {
    setNavbarExpanded(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    closeNavbar();
  };

  return (
    <header className={`header ${darkMode ? "dark-mode" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                <img src={wecodedLogo} alt="weCodedLogo" style={{ width: "130px" }} />
                </a>
                
                <button 
                  className="navbar-toggler" 
                  type="button" 
                  onClick={toggleNavbar}
                  aria-expanded={navbarExpanded}
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className={`collapse navbar-collapse ${navbarExpanded ? 'show' : ''}`} id="navbarContent">
                <ul className="navbar-nav nav-links">
                    <li className="nav-item">
                      <a 
                        href="#celebrating-diversity" 
                        className="nav-link" 
                        onClick={closeNavbar}
                      >
                        Entries
                      </a>
                    </li>
                    <li className="nav-item">
                      <a 
                        href="https://dev.to/challenges/wecoded" 
                        className="nav-link" 
                        onClick={closeNavbar}
                      >
                        WeCoded Challenge
                      </a>
                    </li>
                    <li className="nav-item">
                      <a 
                        href="https://dev.to/t/wecoded" 
                        className="nav-link" 
                        onClick={closeNavbar}
                      >
                        WeCoded Tag
                      </a>
                    </li>
                    <li className="nav-item">
                      <a 
                        href="https://dev.to/" 
                        className="nav-link" 
                        onClick={closeNavbar}
                      >
                        DEV.to
                      </a>
                    </li>
                </ul>
                
                <div className="ms-auto">
                <button 
                    className="btn theme-toggle" 
                    onClick={handleThemeToggle}
                >
                   {darkMode ? "☀️" : "🌙"}
                </button>
                </div>
                </div>
            </div>
        </nav>

        <div className="hero mt-5 container">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-10 col-lg-8">
                <h1 className="display-4 mb-3">WeCoded <span className="text-primary">2025</span>🎉</h1>
                <p className="lead mb-4">A Celebration of Gender Equity in Software Development</p>
                <div className="buttons d-flex flex-row justify-content-center gap-3">
                    <a href="#celebrating-diversity" className="btn btn-primary px-4 py-2">View Entries</a>
                    <a href="https://dev.to/new/wecoded" className="btn btn-secondary px-4 py-2">Submit Your Story</a>
                </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;