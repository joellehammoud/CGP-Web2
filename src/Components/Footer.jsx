import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <p style={{ fontFamily: "'Playfair Display', serif",
          fontSize: "18px",
          color: "var(--amber)",
          letterSpacing: "1.1px",
          marginBottom: "8px"}}>
                     J<span style={{ color: "var(--amber)", fontStyle: "italic" }}>&amp;</span>J Candle &amp; Gypsum Art
                </p>
                 <p style={{ fontSize: "14px" }}>
          Made with Love in Lebanon &nbsp; · &nbsp;
          <a href="mailto:candlesandgypsumartjj@gmail.com">
            candlesandgypsumartjj@gmail.com
          </a>
        </p>
            </div>
        </footer>
    );
}

export default Footer;