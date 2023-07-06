import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Google Women Engineers Scholar",
          "Machine Learning Enthusiast",
          "Devops Enthusiast",
          "MERN Stack Developer",
          "Open Source Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
