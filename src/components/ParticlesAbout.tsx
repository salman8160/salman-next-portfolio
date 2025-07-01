"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesAbout() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
      <Particles
        id="tsparticles-about"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            size: { value: 1.5 },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              outMode: "bounce"
            },
            opacity: {
              value: 0.4
            },
            links: {
              enable: false
            }
          },
        }}
      />
    </div>
  );
}
