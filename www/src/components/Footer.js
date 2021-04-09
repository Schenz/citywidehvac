import React from 'react';

const Footer =  ({ siteTitle }) => {

  return (
    <footer className="footer">
      <div className="footer-belt">
        <div className="company-sign">
        &copy; {new Date().getFullYear()} {siteTitle}
      </div>
      </div>
    </footer>
  )
};

export default Footer;
