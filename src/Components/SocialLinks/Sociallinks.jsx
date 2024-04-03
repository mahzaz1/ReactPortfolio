import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sociallinks() {
    const [isvisible, setVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: '2000',
        });
    };
    return (
        <>
            <div className="container">
                <div className="footer-bottom "><div className="container"><div className="row">
                    <div className="col-lg-6">
                        <div className="copyright-section"><p>Copyright <span>@2024</span>,  All Rights Reserved</p></div>
                    </div>

                    <div className="col-lg-6 text-lg-end"><ul className="footer-bottom-nav"><li><a href="https://github.com/mahzaz1">Github</a></li>
                        <li><a href="https://www.facebook.com/ahzaz.naseer">Facebook</a></li>
                        <li><a href="https://www.instagram.com/malik.ahzaz301/">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/ezaz-naseer-a71237243/">LinkedIn</a></li>
                    </ul>
                    </div>
                </div>
                    <a href="#" className="scroll-top scroll-to-target d-inline-block"><span className="fas fa-angle-double-up"></span>
                    </a>
                </div>

                </div>
            </div>
        </>
    )
}

export default Sociallinks