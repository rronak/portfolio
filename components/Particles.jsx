"use client";

import { useEffect, useRef } from "react";
import "../app/Particles.css";
import { Renderer, Camera, Geometry, Program, Mesh, Transform } from "ogl";

const defaultColors = ["#ffffff", "#ffffff"];
const hexToRgb = hex => {
  hex = hex.replace("#", "");
  const int = parseInt(hex, 16);
  return [
    ((int >> 16) & 255) / 255,
    ((int >> 8) & 255) / 255,
    (int & 255) / 255
  ];
};

export default function Particles({
  particleCount = 250,
  particleSpread = 5,
  speed = 3,
  particleColors = ["#43e9ffff", "#ffffff"],
  baseSize = 1,
  sizeRandomness = 0.1,
  hoverStrength = 10
}) {
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer setup
    const renderer = new Renderer({ alpha: true, depth: false });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.z = 20;

    // Resize
    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize);
    resize();

    // Mouse tracking (global)
    const onMouseMove = e => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Particle attributes
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions.set(
        [
          (Math.random() - 0.5) * particleSpread,
          (Math.random() - 0.5) * particleSpread,
          (Math.random() - 0.5) * particleSpread
        ],
        i * 3
      );
      colors.set(
        hexToRgb(particleColors[Math.floor(Math.random() * particleColors.length)]),
        i * 3
      );
      sizes[i] = baseSize * (Math.random() * sizeRandomness + 0.5);
      speeds[i] = Math.random() * 0.02 + 0.01;
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      color: { size: 3, data: colors },
      size: { size: 1, data: sizes },
      speed: { size: 1, data: speeds }
    });

    const program = new Program(gl, {
      vertex: `
        attribute vec3 position;
        attribute vec3 color;
        attribute float size;
        attribute float speed;
        varying vec3 vColor;
        uniform mat4 projectionMatrix;
        uniform mat4 modelViewMatrix;
        uniform float uTime;

        void main() {
          vColor = color;

          vec3 pos = position;
          pos.x += sin(uTime * speed + pos.y * 2.0) * 0.5;
          pos.y += cos(uTime * speed + pos.x * 2.0) * 0.5;
          pos.z += sin(uTime * speed + pos.x * pos.y) * 0.5;

          gl_PointSize = size;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        varying vec3 vColor;

        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          gl_FragColor = vec4(vColor, 1.0);
        }
      `,
      transparent: true
    });

    const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });
    const scene = new Transform();
    scene.addChild(mesh);

    let raf;
    let time = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      time += speed;
      program.uniforms.uTime = { value: time };

      // Mesh rotation & mouse influence
      mesh.rotation.x = Math.sin(time * 0.1) * 0.3;
      mesh.rotation.y = Math.cos(time * 0.07) * 0.3;
      mesh.rotation.z += 0.001;
      mesh.position.x += (mouse.current.x * hoverStrength - mesh.position.x) * 0.05;
      mesh.position.y += (mouse.current.y * hoverStrength - mesh.position.y) * 0.05;

      renderer.render({ scene, camera });
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      container.removeChild(gl.canvas);
    };
  }, [particleCount, particleSpread, speed, particleColors, baseSize, sizeRandomness, hoverStrength]);

  return (
    <div
      ref={containerRef}
      className="particles-container"
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
    />
  );
}
