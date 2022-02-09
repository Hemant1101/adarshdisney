import React from "react";
import Particles from "react-tsparticles";

function ParticleCanvas() {
  return (
    <>
      <section className="navParticle">
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
          options={{
            particles: {
              connectParticles: true,
              color: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],

              links: {
                distance: 150,
                enable: true,
                opacity: 1,
                width: 2,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 1,
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </section>
    </>
  );
}

export default ParticleCanvas;
