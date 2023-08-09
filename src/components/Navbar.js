import React from 'react';

function Navbar(props) {  
    return (
            <div className="nav">
              {/* <div className="navLogo">
                <img className="logo"  src="/European_Space_Camp_logo.jpg" alt="Space Colonization Logo" />
              </div> */}
  
              <div className="navLinks">
                <ul className="nav_list">
                  <div className='navList'>
                  <li id="nav_item" className="active link"><a href="/portfolio/#/aboutme">About Me</a></li>
                  <li id="nav_item" className="active link"><a href="/portfolio/#/projects">My Projects</a></li>
                  
                  </div>
                </ul>
              </div>
           </div>
          );
  
  }
  
  export default Navbar;
  