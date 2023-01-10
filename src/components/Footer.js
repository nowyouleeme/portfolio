import { React } from 'react';
import { NavLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
    const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 5vh, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
    return (
        <div id="FooterHolder">
            <Fade delay="30" keyframes={fadeUp} duration="1000" triggerOnce={true}>
                <div id="FooterContainer">
                    <nav id="Footer" className="columns">
                        <div id="FooterLeft">
                            <div id="FooterLogoImg">
                                <img src={require("../assets/8BALL.png")} alt="Black and white billiard 8-ball slightly tilted" />
                            </div>
                            <h3>Say hi through my email or social media.ᐟ.ᐟ </h3>
                            <p>© 2023. Designed and Developed by Kathryn Lee</p>
                        </div>
                        <div id="FooterRight">
                            <div className="FooterAnchors1">
                                <NavLink to="/About" style={{ color: "#1c1c1c" }}>About</NavLink>
                                <NavLink to="/Work" style={{ color: "#1c1c1c" }}>Work</NavLink>
                                <NavLink to="/Play" style={{ color: "#1c1c1c" }}>Play</NavLink>
                                <a>Resume ↗</a>
                            </div>
                            <div className="FooterAnchors2">
                                <a target="_blank" rel="noreferrer" href = "mailto: kathryn_lee@brown.edu">Email ↗</a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kathryn-lee-337061221/">LinkedIn ↗</a>
                                <a>Behance ↗</a>
                                <a>Dribbble ↗</a>
                            </div>
                            <div className="FooterAnchors3">
                                <a className="iconLink"><svg width="90%" height="100%" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_56_479)">
                                        <path d="M18 4L10 9L2 4V2L10 7L18 2M18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 0.89 19.1 0 18 0Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_56_479">
                                            <rect width="20" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg></a>
                                <a className="iconLink" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kathryn-lee-337061221/"><svg width="90%" height="100%" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_56_485)">
                                        <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_56_485">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </a>
                                <a>Behance ↗</a>
                                <a>Dribbble ↗</a>
                            </div>
                        </div>
                    </nav>

                </div>
            </Fade>
        </div>
    );
}

export default Footer;