import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    document.body.classList.toggle("menu-open", !isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navHolder">
      <div className="navbarContainer">
        <div className="logoContainer" onClick={() => {
          navigate('/');
        }}>
          <img
            src="/NavLogo.svg"
            alt=""
            className="navbarImage"
            width={150}
            height={50}
          />
        </div>
        <div className="navGap"></div>
        <ul
          className={`navbarTitle z-[100] ${isMobileMenuOpen ? "backdrop-blur-xl bg-inherit" : "mobileMenuClose"}`}
        >
          <ScrollLink to="/" onClick={toggleMobileMenu} style={{
            cursor: 'pointer'
          }}>
          <Link><p className="navbarText">Home</p></Link>
          </ScrollLink>
          <ScrollLink to="features"  spy={true} smooth={true} duration={500} offset={-50} onClick={toggleMobileMenu}><p className="navbarText" style={{
            cursor: 'pointer'
          }}>About
          </p></ScrollLink>
          <div className="flex flex-row gap-[0vh]">
            <Link to="sign" className="bg-yellow-400 rounded-l-[32px] px-[1vw] pt-[0.7vh] pb-[0.4vh] border-[#54cd32] border-4" style ={{
              color: "black",
            }}>Sign In</Link>
            <ScrollLink to="/sign" id="signUp" onClick={toggleMobileMenu} style={{
              cursor: 'pointer'
            }}>
            <Link to='sign'>
              <p className="bg-yellow-400 rounded-l-[32px] px-[1vw] pt-[0.7vh] pb-[0.4vh] border-[#32cd56] border-4" style={{
                color:'black',
                borderRadius: '0px 32px 32px 0px',
                borderColor: '#9acd32',
                borderWidth: '4px'
              }}>Sign Up</p></Link>
            </ScrollLink>
          </div>

        </ul>
        <div className="buttonContainer">
          <button className="navbarMobileButton" onClick={toggleMobileMenu}>
            <img
              src={isMobileMenuOpen ? "/Close.png" : "/mobile-nav.png"}
              alt=""
              className="navbarButton"
              width={30}
              height={30}
              style={{fill: 'white'}}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
