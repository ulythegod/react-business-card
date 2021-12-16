import React from 'react';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-networks">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100007495517110"><img src={facebook} /></a>
                <a target="_blank" href="https://www.instagram.com/ulythegod/"><img src={instagram} /></a>
                <a target="_blank" href="https://github.com/ulythegod"><img src={github} /></a>
            </div>
        </footer>
    )
}