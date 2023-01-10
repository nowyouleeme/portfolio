import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const path01Variants = {
  open: { d: "M4 7 L21.0606 23" },
  closed: { d: "M1 8 L23 8" }
};

const path03Variants = {
  open: { d: "M1 14.5 L23 14.5", opacity: 0 },
  closed: { d: "M1 14.5 L23 14.5", opacity: 1}
};

const path02Variants = {
  open: { d: "M21.0606 7 L4 23" },
  moving: { d: "M23 21 L1 21" },
  closed: { d: "M23 21 L10 21" }
};

const HamButton = (props) => {
  const trigger = props.trigger;
  const [color, setColor] = useState("#1c1c1c");

  const changeColor = () => {
    trigger
      ? setColor("#1c1c1c")
      : setColor("#F8F8F8")
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", changeColor)
  })

  const [isOpen, setOpen] = useState(false);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();
  const path03Controls = useAnimation();

  const onClick = async () => {
    setOpen(!isOpen);
    if (!isOpen) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path03Controls.start(path03Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      path03Controls.start(path03Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  };

  return (
    <button id="HamButton" onClick={onClick}>
      <svg width="25" height="25" viewBox="0 0 25 25">
        <motion.path
        {...path01Variants.closed}
          strokeWidth="1.6"
          stroke={color}
          animate={path01Controls}
          strokeLinecap="round"
          transition={{duration: 0.2}}

        />
        <motion.path
        {...path03Variants.closed}
          strokeWidth="1.6"
          stroke={color}
          animate={path03Controls}
          strokeLinecap="round"
          transition={{duration: 0.2}}
        />
        <motion.path
        {...path02Variants.closed}
          strokeWidth="1.6"
          stroke={color}
          animate={path02Controls}
          strokeLinecap="round"
          transition={{duration: 0.2}}
        />
      </svg>
    </button>
  );
};


export default HamButton; 