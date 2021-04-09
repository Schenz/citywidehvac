import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from 'react';

const Header = ({ siteTitle }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-belt">
          <div>
            <h4>
              <Link className="logo" to="/" >
                <div className="logo-image"></div>     
                {siteTitle}
              </Link>
            </h4>
          </div>
        </div>
      </nav>
    </header>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
