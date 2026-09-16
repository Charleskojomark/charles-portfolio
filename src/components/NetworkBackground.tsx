import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const NetworkBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;
    camera.position.y = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Node graph generation (isometric distributed nodes)
    const nodeCount = 42;
    const nodePositions: THREE.Vector3[] = [];
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodeCount * 3);
    const colors = new Float32Array(nodeCount * 3);

    const blueColor = new THREE.Color(0x2563eb);
    const brightBlueColor = new THREE.Color(0x38bdf8);

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 32;
      const y = (Math.random() - 0.5) * 18;
      const z = (Math.random() - 0.5) * 16;
      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const c = Math.random() > 0.4 ? blueColor : brightBlueColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Circle texture for smooth round node points
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(34, 211, 238, 0.8)');
      gradient.addColorStop(0.7, 'rgba(99, 102, 241, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.8,
      map: texture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    // Edges connecting nearby nodes
    const maxDistance = 9.0;
    const lineIndices: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < maxDistance) {
          lineIndices.push(i, j);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.setIndex(lineIndices);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Traveling Data Packets
    const packetCount = 12;
    const packetGeometry = new THREE.BufferGeometry();
    const packetPositions = new Float32Array(packetCount * 3);
    packetGeometry.setAttribute('position', new THREE.BufferAttribute(packetPositions, 3));

    const packetMaterial = new THREE.PointsMaterial({
      size: 0.55,
      map: texture,
      color: 0x34d399, // Green health signal packets
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const packets = new THREE.Points(packetGeometry, packetMaterial);
    scene.add(packets);

    interface PacketData {
      startNode: number;
      endNode: number;
      progress: number;
      speed: number;
    }

    const packetDataList: PacketData[] = [];
    const validPairs: [number, number][] = [];
    for (let i = 0; i < lineIndices.length; i += 2) {
      validPairs.push([lineIndices[i], lineIndices[i + 1]]);
    }

    for (let i = 0; i < packetCount; i++) {
      const pair = validPairs[Math.floor(Math.random() * validPairs.length)] || [0, 1];
      packetDataList.push({
        startNode: pair[0],
        endNode: pair[1],
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
      });
    }

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        clock.getDelta();
        targetX += (mouseX * 0.8 - targetX) * 0.05;
        targetY += (mouseY * 0.6 - targetY) * 0.05;

        // Subtle continuous rotation + mouse parallax
        scene.rotation.y = targetX * 0.4 + clock.getElapsedTime() * 0.03;
        scene.rotation.x = -targetY * 0.3 + 0.1;

        // Update data packets
        const pArray = packetGeometry.attributes.position.array as Float32Array;
        for (let i = 0; i < packetCount; i++) {
          const pd = packetDataList[i];
          pd.progress += pd.speed;
          if (pd.progress > 1) {
            pd.progress = 0;
            const newPair = validPairs[Math.floor(Math.random() * validPairs.length)] || [0, 1];
            pd.startNode = newPair[0];
            pd.endNode = newPair[1];
          }

          const start = nodePositions[pd.startNode];
          const end = nodePositions[pd.endNode];
          pArray[i * 3] = start.x + (end.x - start.x) * pd.progress;
          pArray[i * 3 + 1] = start.y + (end.y - start.y) * pd.progress;
          pArray[i * 3 + 2] = start.z + (end.z - start.z) * pd.progress;
        }
        packetGeometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      lineGeometry.dispose();
      packetGeometry.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      packetMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};
