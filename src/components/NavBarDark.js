import { React, useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import HamButtonDark from './HamButtonDark';
import { motion } from "framer-motion";

const variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


const NavbarColorChange = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const trigger = props.trigger;
    const [color, setColor] = useState({ bg: "#2b2b2bda", text: "#F8F8F8", border: "3px solid #ffffff00" });
    const [width, setWidth] = useState("100%");

    const [display, setDisplay] = useState("none");

    const handleDisplay = () => {
        setIsOpen(!isOpen);
        if (display == "none") {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }
    }

    const changeColor = () => {
        trigger
            ? setColor({ bg: "#2b2b2bda", text: "#F8F8F8", border: "3px solid #ffffff00" })
            : setColor({ bg: "#2b2b2bda", text: "#F8F8F8", border: "3px solid #ffffff00" })
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener("scroll", changeColor)
    })

    // const handleWidth = () => {
    //     if (typeof window !== "undefined") {
    //         let newWidth = (-0.035 * document.scrollingElement.scrollTop) + 105
    //         if (newWidth <= 100) {
    //             setWidth(newWidth.toString() + '%')
    //         }
    //     }
    // }

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         window.addEventListener("scroll", handleWidth);
    //     }
    //     return () => {
    //         if (typeof window !== "undefined") {
    //             window.removeEventListener("scroll", handleWidth);
    //         }
    //     };
    // }, []);

    return (
        <div id="NavContainer">
            <div id="Nav" style={{ backgroundColor: color["bg"], width: width, border: color["border"] }}>
                <div id="NavLeft">
                    <Link to="/" style={{ display: 'flex', textDecoration: 'none' }}>
                        <div id="NavLogoImg">
                            <img src={require("../assets/8BALL.png")} alt="Black and white billiard 8-ball slightly tilted" />
                        </div>
                        <NavLink className="brand" to="/" style={{ display: 'flex', textDecoration: 'none', color: color["text"], transition: "0.5s" }}>
                            <h1>Kathryn Lee</h1>
                        </NavLink>
                    </Link>
                </div>
                <div id="NavRight-expand">
                    <NavLink className="ExpandedLink" to="/About" style={{ display: 'flex', textDecoration: 'none', color: color["text"], transition: "0.5s" }}>
                        <p>About</p>
                    </NavLink>
                    <NavLink className="ExpandedLink" to="/Work" style={{ display: 'flex', textDecoration: 'none', color: color["text"], transition: "0.5s" }}>
                        <p>Work</p>
                    </NavLink>
                    <NavLink className="ExpandedLink" to="/Play" style={{ display: 'flex', textDecoration: 'none', color: color["text"], transition: "0.5s" }}>
                        <p>Play</p>
                    </NavLink>
                </div>
                <div id="NavRight-collapse">
                    <motion.button onClick={handleDisplay} style={{ border: "0", background: "none" }}>
                        <HamButtonDark trigger={trigger} />
                    </motion.button>
                </div>
            </div>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="menu"
                style={{display: display}}
            >
                <motion.div className="Vertical"
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 25px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.5,
                                delayChildren: 0,
                                staggerChildren: 0.03,
                                staggerDirection: 1
                                
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 25px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.5,
                                delayChildren: 0,
                                staggerChildren: 0.05,
                                staggerDirection: -1
                            }
                        }
                    }}
                    style={{ backgroundColor: color["bg"], width: width, border: color["border"]  }}
                >
                    <motion.div className="CenterLink" variants={variants}>
                        <NavLink className="Link topLink" to="/About" style={{display: 'flex', textDecoration: 'none', color:  color["text"]}}>
                            <p>About</p>
                        </NavLink>
                    </motion.div>
                    <motion.div className="CenterLink" variants={variants}>
                        <NavLink className="Link middleLink"to="/Work" style={{ display: 'flex', textDecoration: 'none', color:  color["text"]}}>
                            <p>Work</p>
                        </NavLink>
                    </motion.div>
                    <motion.div className="CenterLink" variants={variants}>
                        <NavLink className="Link bottomLink"to="/Play" style={{ display: 'flex', textDecoration: 'none', color:  color["text"]}}>
                            <p>Play</p>
                        </NavLink>
                    </motion.div>
                </motion.div>
            </motion.nav>
        </div>
    )
}

export default NavbarColorChange;