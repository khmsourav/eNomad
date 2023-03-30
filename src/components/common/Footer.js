import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-header">
          <div className="logo-area">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="mail-area">
            <form className="subscribe-form">
              <input
                type="email"
                className="emails"
                name="emails"
                placeholder="Enter your mail"
              ></input>
              <button className="submit" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-content">
          <span> &copy; Copyright by WPDeveloper</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
