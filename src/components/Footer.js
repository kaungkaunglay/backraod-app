import React from 'react';
import {socialLinks} from "../data";
import PageLinks from './PageLinks'
import SocialLink from "./SocialLink";
function Footer(props) {
    return (
        <footer className="section footer">

            {/*<PageLinks parentClass='footer-links' itemClass='footer-link'/>*/}
            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    const {id, href, icon } =link
                   return (
                       <SocialLink key={id} {...link} itemClass='footer-icon' />
                   )
                })}
                <li>
                </li>
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
}

export default Footer;