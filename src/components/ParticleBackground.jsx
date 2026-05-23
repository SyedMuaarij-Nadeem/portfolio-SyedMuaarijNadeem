import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // this loads the slim version of tsparticles, which is bundle-size optimized
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        fpsLimit: 120,
        fullScreen: {
            enable: true,
            zIndex: 0,
        },
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
            },
            modes: {
                grab: {
                    distance: 180,
                    links: {
                        opacity: 0.6,
                        color: "#9d4fd6",
                    },
                },
            },
        },
        particles: {
            color: {
                value: ["#7426b0", "#9d4fd6", "#c084fc"],
            },
            links: {
                color: "#7426b0",
                distance: 140,
                enable: true,
                opacity: 0.2,
                width: 0.8,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 70,
            },
            opacity: {
                value: { min: 0.3, max: 0.8 },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
        background: {
            color: "transparent",
        },
    };

    if (init) {
        return (
            <div style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 0 }}>
                <Particles id="tsparticles" options={options} />
            </div>
        );
    }

    return null;
};

export default ParticleBackground;
