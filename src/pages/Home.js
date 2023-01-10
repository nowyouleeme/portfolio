import React from 'react';
import FeaturedCard from '../components/FeaturedCard';
import { Link } from "react-router-dom";
import { Link as ScrollLink} from 'react-scroll'
import Footer from '../components/Footer';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import NavbarColorChange from '../components/NavbarColorChange';


const Home = () => {
    const { ref, inView } = useInView({
        threshold: 0
    });
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

    const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-5vw, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

    return (
        <div id="Home">
            <NavbarColorChange trigger={inView} />
            <section ref={ref} id="Landing" className="DisplayPadding">
                <div id="LandingContent">
                    <div className="columns">
                        <div id="Display">
                            <Fade keyframes={fadeUp} duration="900" triggerOnce={true}>
                                <h1>Kathryn Lee</h1>
                                <div id="Typing">
                                    <TypeAnimation
                                        sequence={['',
                                            1000,
                                            'is an aspiring hands-on & curious UI/UX designer who’s passionate about bringing designs that enhance the human experience to life',
                                            2500,
                                            '',
                                            1500,
                                            'is learning Blender and making blobs, little houses, etc.',
                                            2500,
                                            '',
                                            1500,
                                            'is on the lookout for opportunities that center users in making complex things easy to understand',
                                            2500,
                                            '',
                                            1500,
                                            'is throwing together last-minute choreography in her room with chunky headphones on',
                                            2500,
                                            '',
                                            1500,
                                            'is looking for new Figma plug-ins and design systems to tinker with',
                                            2500,
                                            '',
                                            1500,
                                            'needs to reduce her screentime',
                                            2500,
                                            '',
                                            1500,
                                            'is seeking out an internship for the summer',
                                            2500,
                                            '',
                                            1500,
                                            'developed this website using React, HTML, and CSS',
                                            2500,
                                            '',
                                            1500,
                                            'wants to learn Javascript',
                                            2500,
                                            '',
                                            1500,
                                            'misses her two apple-head chihuahuas',
                                            2500,
                                            '',
                                            1500,
                                            'needs to update her eye prescription',
                                            2500,
                                            '',
                                            1500,
                                            'is happy you stayed and read this far.⋆˚⊹',
                                            2500,]}
                                        speed={50}
                                        deletionSpeed={65}
                                        wrapper="div"
                                        cursor={true}
                                        repeat={Infinity}
                                    />
                                </div>
                            </Fade>
                        </div>

                        <div id="LandingDesc">
                            <Fade delay="925" keyframes={slideIn} duration="900" triggerOnce={true}>
                                <p id="Currently"><b>CURRENTLY</b> <a target="_blank" rel="noreferrer" href="https://2023.hackatbrown.org">✺<a>Hack@Brown</a></a> Experience team co-lead & <a className="design">✎<a>DesignxHealth</a></a> UX consultant</p>
                            </Fade>
                            <Fade delay="950" keyframes={slideIn} duration="900" triggerOnce={true}>
                                <p id="Studying"><b>STUDYING</b> Computer Science on the Visual Computing track at <a className="brown" target="_blank" rel="noreferrer" href="https://www.brown.edu/">⌘<a>Brown University</a></a></p>
                            </Fade>
                        </div>

                        <div id="LandingButtonsContainer">
                            <div id="LandingButtons">
                                <Fade delay="980" duration="1000" triggerOnce={true}>
                                    <Link className="homeButton" to="/About" style={{ textDecoration: 'none', color: "#1c1c1c", margin: "2vh 3vw" }}><p>more about me ✰</p></Link>
                                    <ScrollLink className="homeButton" to="Featured" spy={true} smooth={true} ignoreCancelEvents={true} duration={2000} offset={0} style={{ textDecoration: 'none', color: "#1c1c1c", margin: "2vh 3vw" }}><p>featured works ↴</p></ScrollLink>

                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Featured" className="FeaturedPadding">
                <div id="FeaturedContent">
                    <div id="FeaturedHeader">
                        <Fade keyframes={fadeUp} duration="800" triggerOnce={true}>
                            <div>
                                <h2>✄ My Featured Works</h2>
                                <Link to="/Work" style={{ textDecoration: 'none', color: "#F8F8F8" }}><p className="featuredP">Or just check out everything I’ve been up to. ⮕</p></Link>
                            </div>

                        </Fade>
                    </div>
                    <div id="Cards" className="columns rows">
                        <div className="Card-left">
                            <Fade duration="1500" triggerOnce={true}>
                                <FeaturedCard name="Slingshot Mobile" number={1} description="I worked with three fellow classmates in my CSCI1300 “UI/UX” course to design an interactive mobile prototype for Slingshot, a medical billing YC B2B startup." tags={["UIUX Design", "Product Branding", "Mobile", "Front-End Development"]} />
                            </Fade>

                        </div>
                        <div className="Card-right">
                            <Fade duration="1500" triggerOnce={true}>
                                <FeaturedCard name="Toronto Cupcake Website Redesign" number={2} description="This was an individual project for my CSCI1300 “UI/UX” course in which I redesigned and rebranded the homepage for the Canadian cupcakery, Toronto Cupcake, using HTML and CSS." tags={["Product Branding", "UIUX Design", "Front-End Development"]} />
                            </Fade>
                        </div>

                        <div className="Card-left">
                            <Fade duration="1500" triggerOnce={true}>
                                <FeaturedCard name="My Shoe Collection as a Storefront" number={3} description="Using React, HTML, CSS, and Javascript, I designed and implemented a webpage that presented my shoe collection as a store with functional filtering, sorting, and aggregating features." tags={["UIUX Design", "Front-End Development", "Desktop"]} />
                            </Fade>
                        </div>
                        <div className="Card-right">
                            <Fade duration="1500" triggerOnce={true}>
                                <FeaturedCard name="MyPrint Printer Release Stations Study" number={4} description="Through observing user interactions with the Brown University Printer Release Stations, I constructed personas and storyboards to analyze pain points and opportunities for better user experience." tags={["Personas", "Storyboarding"]} />
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="LandingScrollTop scrollButton">
                    <Fade delay="10" duration="1000" triggerOnce={true}>
                        <ScrollLink to="Landing" spy={true} smooth={true} ignoreCancelEvents={true} duration={2000} offset={0}>
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

export default Home;