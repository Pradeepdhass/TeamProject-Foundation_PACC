import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  const resize = () => {
    if (window.innerWidth >= 992) {
      setMobileMenu(false);
    }
  };

  window.addEventListener("resize", resize);

  return () => window.removeEventListener("resize", resize);
}, []);

  return (
    <>
      

      <header
        className={`navbar navbar-expand-lg fixed-top custom-navbar ${
          isScrolled ? "navbar-scroll" : ""
        }`}
      >
        <div className="container-fluid px-lg-5">
          

          <a className="navbar-brand" href="#">
            <svg
              width="130"
              height="38"
              viewBox="0 0 130 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="0"
                y="28"
                fontSize="26"
                fontWeight="800"
                fill="#111"
                fontFamily="Arial"
              >
                payoda
              </text>

              <circle cx="90" cy="23" r="3.5" fill="#b1204a" />
            </svg>
          </a>

        

          <button
  type="button"
  className="navbar-toggler border-0 shadow-none"
  onClick={() => setMobileMenu((prev) => !prev)}
  aria-label="Toggle navigation"
>
  <i className={`bi ${mobileMenu ? "bi-x-lg" : "bi-list"} fs-2`}></i>
</button>

        

          <div className="navbar-collapse d-none d-lg-flex justify-content-end">
            <ul className="navbar-nav align-items-center">
           
              <li className="nav-item dropdown mega-dropdown">
                <a href="#" className="nav-link dropdown-toggle">
                  Platform
                </a>

                <div className="mega-menu">
                  <div className="row">
                

                    <div className="col-lg-4 mega-left">
                      <h6 className="text-uppercase mb-3">Platform</h6>

                      <a
                        href="#platform-overview"
                        className="featured-card text-decoration-none"
                      >
                        <span className="badge bg-light text-dark mb-2">
                          Enterprise AI
                        </span>

                        <h5>The Platform</h5>

                        <p>
                          Compliance reasoning infrastructure for engineering
                          standards at enterprise scale.
                        </p>
                      </a>

                      <div className="mt-4">
                        <a href="#features" className="quick-link">
                          → What is the Platform?
                        </a>

                        <a href="#how-it-works" className="quick-link">
                          → Build / Monitor / Govern
                        </a>
                      </div>
                    </div>

          

                    <div className="col-lg-8">
                      <h6 className="text-uppercase text-secondary mb-3">
                        Platform Pages
                      </h6>

                      <div className="menu-list">
                        <a href="#platform-overview" className="menu-card">
                          <div className="icon-box">
                            <i className="bi bi-cpu"></i>
                          </div>

                          <div>
                            <h5>Platform Overview</h5>

                            <p>
                              Learn how the platform works and how AI agents
                              automate engineering compliance.
                            </p>
                          </div>
                        </a>

                        <a href="#solutions" className="menu-card">
                          <div className="icon-box">
                            <i className="bi bi-lightbulb"></i>
                          </div>

                          <div>
                            <h5>Use Cases</h5>

                            <p>
                              Oil & Gas, Aerospace, Power, Manufacturing and EPC
                              Engineering.
                            </p>
                          </div>
                        </a>

                        <a href="#security" className="menu-card">
                          <div className="icon-box">
                            <i className="bi bi-shield-check"></i>
                          </div>

                          <div>
                            <h5>Security & Governance</h5>

                            <p>
                              Vault, Audit Trails, Deployment Options and
                              Enterprise Security.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
           

              <li className="nav-item dropdown mega-dropdown">
                <a href="#" className="nav-link dropdown-toggle">
                  Solutions
                </a>

                <div className="mega-menu">
                  <div className="row">
                    <div className="col-lg-6">
                      <h6 className="mega-title">By Industry</h6>

                      <a href="#" className="menu-card">
                        <div className="icon-box">
                          <i className="bi bi-building"></i>
                        </div>

                        <div>
                          <h5>Manufacturing</h5>

                          <p>
                            AI solutions for digital manufacturing and smart
                            factories.
                          </p>
                        </div>
                      </a>

                      <a href="#" className="menu-card">
                        <div className="icon-box">
                          <i className="bi bi-bank"></i>
                        </div>

                        <div>
                          <h5>Banking</h5>

                          <p>
                            Secure enterprise platforms for financial
                            organizations.
                          </p>
                        </div>
                      </a>

                      <a href="#" className="menu-card">
                        <div className="icon-box">
                          <i className="bi bi-hospital"></i>
                        </div>

                        <div>
                          <h5>Healthcare</h5>

                          <p>
                            Intelligent healthcare workflows and automation.
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="col-lg-6">
                      <h6 className="mega-title">By Service</h6>

                      <a href="#" className="menu-card">
                        <div className="icon-box">
                          <i className="bi bi-cpu"></i>
                        </div>

                        <div>
                          <h5>Artificial Intelligence</h5>

                          <p>
                            Generative AI, Agents and enterprise automation.
                          </p>
                        </div>
                      </a>

                      <a href="#" className="menu-card">
                        <div className="icon-box">
                          <i className="bi bi-cloud"></i>
                        </div>

                        <div>
                          <h5>Cloud Solutions</h5>

                          <p>AWS, Azure and Google Cloud transformation.</p>
                        </div>
                      </a>

                      <a href="#" className="menu-card">
                        <div className="icon-box">
                          <i className="bi bi-code-slash"></i>
                        </div>

                        <div>
                          <h5>Software Engineering</h5>

                          <p>
                            Full-stack application development using modern
                            technologies.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

    

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Resources
                </a>

                <ul className="dropdown-menu shadow border-0">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Case Studies
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      White Papers
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Documentation
                    </a>
                  </li>
                </ul>
              </li>

            

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Company
                </a>

                <ul className="dropdown-menu shadow border-0">
                  <li>
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Leadership
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Careers
                    </a>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>

        

              <li className="nav-item ms-lg-3">
                <Link
                  to="/contact"
                  className="btn btn-danger rounded-pill px-4 fw-semibold"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>


      {mobileMenu && (
        <>
          <div
            className="mobile-overlay"
            onClick={() => setMobileMenu(false)}
          ></div>

          <div className="mobile-menu">
            <div className="mobile-header">
              <h4 className="mb-0 fw-bold">Menu</h4>

              <button
                className="btn-close"
                onClick={() => setMobileMenu(false)}
              ></button>
            </div>

            <div className="mobile-body">
           

              <div className="mobile-section">
                <h6>Platform</h6>

                <a
                  href="#platform-overview"
                  onClick={() => setMobileMenu(false)}
                >
                  Platform Overview
                </a>

                <a href="#features" onClick={() => setMobileMenu(false)}>
                  Features
                </a>

                <a href="#security" onClick={() => setMobileMenu(false)}>
                  Security
                </a>
              </div>

          

              <div className="mobile-section">
                <h6>Solutions</h6>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  Manufacturing
                </a>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  Banking
                </a>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  Healthcare
                </a>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  Artificial Intelligence
                </a>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  Cloud Solutions
                </a>
              </div>

      

              <div className="mobile-section">
                <h6>Resources</h6>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  Blog
                </a>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  Case Studies
                </a>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  White Papers
                </a>
              </div>

         

              <div className="mobile-section">
                <h6>Company</h6>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  About Us
                </a>

                <a href="#" onClick={() => setMobileMenu(false)}>
                  Careers
                </a>

                <Link to="/contact" onClick={() => setMobileMenu(false)}>
                  Contact
                </Link>
              </div>
            </div>

            <div className="mobile-footer">
              <Link
                to="/contact"
                className="btn btn-danger w-100 rounded-pill"
                onClick={() => setMobileMenu(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
