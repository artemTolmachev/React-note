import React from "react";
import { DiReact } from "react-icons/di";

function Footer() {
    return (
      <>
        <footer className="p-3">
          <div className="container">
            <div className='d-flex justify-content-center'>
              <a href="/" className="d-flex">
                  <DiReact className="R-icon" color='white'/><p className="mt">ITGIT</p>
                </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
 