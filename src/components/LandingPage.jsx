import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "/CC_Background2.svg"; // Ensure you have an appropriate background image in your project
import "../App.css";

const LandingPage = ({ onLearnMoreClick }) => {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={1.5} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1.5} // Ensures the background covers all pages
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center content vertically
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "80vw",
                height: "60vh",
              }}
            >
              {[...Array(6).keys()].map((i) => (
                <AnimatePresence key={i}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: i * 0.5 }}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={`/LogoElement${i + 1}.svg`}
                      alt={`Logo Element ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }} // Initial opacity set to 0
              animate={{ opacity: 1 }} // Animate to opacity 1
              transition={{ duration: 1, delay: 3.5 }} // Delay animation by 7 seconds
              style={{ marginTop: "-80px", textAlign: "center" }} // Add some margin and center the text
            >
              <p style={{ fontSize: "1.2em", lineHeight: "1.5" }}>
                {" "}
                {/* Adjust font size and line height for readability */}
                Increasing Productivity in Communities
                <br />
                Through Financing Mechanisation.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }} // Initial opacity set to 0
              animate={{ opacity: 1 }} // Animate to opacity 1
              transition={{ duration: 1, delay: 5 }} // Delay animation by 6 seconds (after all logos are shown)
              onClick={onLearnMoreClick} // Use the prop to handle click
              className="learn-more-button" // Add a class for styling
            >
              Learn More
            </motion.button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default LandingPage;
