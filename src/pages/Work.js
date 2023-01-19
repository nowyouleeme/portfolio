import { React } from 'react';
import NavBarDark from '../components/NavBarDark';
import Footer from '../components/Footer';
import MainCard from '../components/MainCard';
import { Fade } from "react-awesome-reveal";
import { Link as ScrollLink} from 'react-scroll';
import { keyframes } from "@emotion/react";


const Work = () => {
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
        <div id="Work">
            <NavBarDark />
            <section id="AllWork" className="WorkPadding">
                <div classNames="columns">
                    <Fade keyframes={fadeUp} duration="900" triggerOnce={true}>

                        <h1>✧ All Works</h1>

                    </Fade>
                </div>

                <div id="MainCards" className="columns-3">
                    <div className="Card-Full">
                        <Fade delay="25" duration="1000" triggerOnce={true}>
                            <MainCard name="Slingshot Mobile" number={1} description="I worked with three fellow classmates in my CSCI1300 “UI/UX” course to design an interactive mobile prototype for Slingshot, a medical billing YC B2B startup." tags={["UIUX Design", "Product Branding", "Mobile", "Front-End Development"]} />
                        </Fade>

                    </div>
                    <div className="Card-Full">
                        <Fade delay="25" duration="1000" triggerOnce={true}>
                            <MainCard name="Toronto Cupcake Website Redesign" number={2} description="This was an individual project for my CSCI1300 “UI/UX” course in which I redesigned and rebranded the homepage for the Canadian cupcakery, Toronto Cupcake, using HTML and CSS." tags={["Product Branding", "UIUX Design", "Front-End Development"]} />
                        </Fade>
                    </div>

                    <div className="Card-Full">
                        <Fade delay="25" duration="1000" triggerOnce={true}>
                            <MainCard name="My Shoe Collection as a Storefront" number={3} description="Using React, HTML, CSS, and Javascript, I designed and implemented a webpage that presented my shoe collection as a store with functional filtering, sorting, and aggregating features." tags={["UIUX Design", "Front-End Development", "Desktop"]} />
                        </Fade>
                    </div>
                    <div className="Card-Full">
                        <Fade delay="25" duration="1000" triggerOnce={true}>
                            <MainCard name="MyPrint Printer Release Stations Study" number={4} description="Through observing user interactions with the Brown University Printer Release Stations, I constructed personas and storyboards to analyze pain points and opportunities for better user experience." tags={["Personas", "Storyboarding"]} />
                        </Fade>
                    </div>
                </div>
                <div className="LandingScrollTop scrollButton">
                    <Fade delay="10" duration="1000" triggerOnce={true}>
                        <ScrollLink to="AllWork" spy={true} smooth={true} ignoreCancelEvents={true} duration={2000} offset={0}>
                            <div>
                                <p className="fingy">☝︎</p>
                                <p className="fingyText">scroll to top</p>
                            </div>
                        </ScrollLink>
                    </Fade>
                </div>
            </section>
            <Footer />
        </div>

    );
}

export default Work;