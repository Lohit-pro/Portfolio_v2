"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  height: string;
  width:string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ height, width }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Vertex shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Fragment shader with gradient effect
    const fragmentShader = `
      varying vec2 vUv;
      uniform vec3 color1;
      uniform vec3 color2;

      void main() {
        vec3 color = mix(color1, color2, vUv.y);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Shader material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        color1: { value: new THREE.Color('#C73659') }, // Default color for dark mode
        color2: { value: new THREE.Color('#EEEEEE') } // Default color for light mode
      }
    });

    // Add a simple cube with the gradient material
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Adjust size here
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Function to handle mouse move
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      cube.rotation.x = mouseY * Math.PI;
      cube.rotation.y = mouseX * Math.PI;
    };

    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Update color based on theme
    const updateThemeColors = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      const color2 = isDarkMode ? '#151515' : '#EEEEEE';
      material.uniforms.color2.value.set(color2);
    };

    // Initial color update
    updateThemeColors();

    // Observe theme changes and update colors
    const observer = new MutationObserver(updateThemeColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: width, height: height }} />;
};

export default ThreeScene;
