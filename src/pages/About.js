import { React } from 'react';
import NavBarDark from '../components/NavBarDark';
import Footer from '../components/Footer';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const About = () => {
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
        <div id="About">
            <NavBarDark />
            <div id="AboutMe" className="AboutPadding">
                <div>
                    <Fade keyframes={fadeUp} duration="900" triggerOnce={true}>
                        <h1>✌︎ About Me</h1>
                    </Fade>
                </div>
                <div id="AboutMeContainer">
                    <div id="AboutMePic">
                        <Fade delay="30" duration="1000" triggerOnce={true}>
                            <img src={require("../assets/me.JPG")} alt="Asian girl with black hair sitting on the ground in a white t-shirt and jean shorts, smiling"/>
                        </Fade>

                    </div>
                    <div id="AboutMeDesc">
                        <Fade delay="50" duration="1000" triggerOnce={true}>
                            <h2>Hey! I'm Kathryn.</h2>
                            <p>
                                A pre-med junior pursuing a Computer Science B.A. on the Visual Computing Track, I'm an aspiring UIUX designer and front-end developer with a passion for...</p>
                        </Fade>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default About;