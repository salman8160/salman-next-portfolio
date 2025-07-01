"use client";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesAbout() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="aboutParticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: { value: "#bb86fc" },
          shape: { type: "circle" },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: { min: 0.5, max: 1.5 },
          },
          links: {
            enable: true,
            distance: 130,
            color: "#bb86fc",
            opacity: 0.3,
            width: 0.7,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: false },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: { opacity: 0.5 },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
