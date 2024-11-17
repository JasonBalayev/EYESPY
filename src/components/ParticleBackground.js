import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true },
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 50,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
