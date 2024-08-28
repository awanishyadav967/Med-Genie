import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className='footerHolder'>
        <div className='footerContainer'>

          <div className='ThelogoContainer'>
            <img src='/NavLogo.svg' alt='' style={{
              width: '200px',
              height: '70px',
              margin: '0'
            }}/>
            <p>Extending Support from</p>
            <p>the Comfort of Home</p>
            <ul>
              <li>
                <img src="/SocialMedia/Facebook.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/Instagram.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/LinkedIn.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/Twitter.svg"></img>
              </li>
              <li>
                <img src="/SocialMedia/YouTube.svg"></img>
              </li>
            </ul>
          </div>

          <div className="footerContacts">
            <p className="footerGreen">Contact Us</p>
            <span>
              <span>
                <img src="/Contacts/Email.svg"></img>
              </span>
              <span>avanishyadavvns23@gmail.com</span>
            </span>
            <span>
              <span>
                <img src="/Contacts/Phone.svg"></img>
              </span>
              <span>+91 6388552810</span>
            </span>
            <span>
              <span>
                <img src="/Contacts/Mark.svg"></img>
              </span>
              <span>Clement town ,Dehradun,Uttrakhand</span>
            </span>
          </div>
        </div>

          <div>
            <hr className="divLine"></hr>


        </div>
      </div>
    </>
  );
};

export default Footer;
