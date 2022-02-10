import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";

// import Particles from "react-tsparticles";

function ParticleCanvas() {
  const particlesContainer = useRef(null);
  const CanvasParticle = useRef(<div></div>);
  useEffect(() => {
    // Particles.init({
    //   selector: "",
    // });
  }, []);
  return (
    <>
      <section ref={particlesContainer} className="navParticle">
        <h1>FRONTEND TRENDS</h1>
        <h3 className="span loader">
          <span className="mParticle">B</span>
          <span className="mParticle">E</span>
          <span className="mParticle">N</span>
          <span className="mParticle">E</span>
          <span className="mParticle">F</span>
          <span className="mParticle">I</span>
          <span className="mParticle">T</span>
          <span className="mParticle">S</span>
          <span className="mParticle">&nbsp;</span>
          <span className="mParticle">o</span>
          <span className="mParticle">f</span>
          <span className="mParticle">&nbsp;</span>
          <span className="mParticle">T</span>
          <span className="mParticle">E</span>
          <span className="mParticle">C</span>
          <span className="mParticle">H</span>
          <span className="mParticle">N</span>
          <span className="mParticle">O</span>
          <span className="mParticle">L</span>
          <span className="mParticle">O</span>
          <span className="mParticle">G</span>

          <span className="mParticle">I</span>
          <span className="mParticle">E</span>
          <span className="mParticle">S</span>
        </h3>
        <Particles
          // container={particlesContainer.current}
          // height="100px"
          // width="100px"
          // className="particles"
          options={{
            fullScreen: { enable: false },
            particles: {
              color: ["#03dac6", "#ff0266", "#000000"],
              line_linked: {
                enable: true,
                color: "random",
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  lineLinked: {
                    opacity: 1,
                  },
                },

                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
          }}
        />
      </section>
    </>
  );
}

export default ParticleCanvas;
