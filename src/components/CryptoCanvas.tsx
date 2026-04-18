"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function CryptoCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      200
    );
    camera.position.set(0, 2, 12);

    // ── Lights ────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const purpleLight = new THREE.PointLight(0x7c3aed, 2, 60);
    purpleLight.position.set(10, 10, 10);
    scene.add(purpleLight);
    const cyanLight = new THREE.PointLight(0x06b6d4, 1.5, 60);
    cyanLight.position.set(-10, -5, -10);
    scene.add(cyanLight);
    const goldLight = new THREE.PointLight(0xf59e0b, 1, 50);
    goldLight.position.set(0, -8, 5);
    scene.add(goldLight);
    const spot = new THREE.SpotLight(0xa78bfa, 3, 80, 0.4, 1);
    spot.position.set(0, 15, 0);
    scene.add(spot);

    // ── Stars ─────────────────────────────────────────────────────────────────
    const starCount = 3000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 200;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0.5 })
    );
    scene.add(stars);

    // ── Coin group ────────────────────────────────────────────────────────────
    const coinGroup = new THREE.Group();
    scene.add(coinGroup);

    // Coin body
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      metalness: 0.9,
      roughness: 0.05,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.3,
    });
    coinGroup.add(new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 0.25, 64), coinMat));

    // Coin rim
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 2,
      metalness: 1,
      roughness: 0,
    });
    coinGroup.add(new THREE.Mesh(new THREE.TorusGeometry(2, 0.06, 16, 64), rimMat));

    // Inner ring
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xa78bfa,
      emissive: 0xa78bfa,
      emissiveIntensity: 0.8,
      metalness: 1,
      roughness: 0.1,
      side: THREE.DoubleSide,
    });
    const innerRing = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.5, 64), innerRingMat);
    innerRing.rotation.x = Math.PI / 2;
    innerRing.position.y = 0.14;
    coinGroup.add(innerRing);

    // Center disc
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1,
    });
    const centerDisc = new THREE.Mesh(new THREE.CircleGeometry(0.6, 32), centerMat);
    centerDisc.rotation.x = Math.PI / 2;
    centerDisc.position.y = 0.14;
    coinGroup.add(centerDisc);

    // ── Orbiting particles ────────────────────────────────────────────────────
    const pCount = 120;
    const pPos = new Float32Array(pCount * 3);
    const pCol = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const angle = (i / pCount) * Math.PI * 2;
      const radius = 3.5 + Math.random() * 2.5;
      pPos[i * 3] = Math.cos(angle) * radius;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      pPos[i * 3 + 2] = Math.sin(angle) * radius;
      const isCyan = Math.random() > 0.5;
      pCol[i * 3] = isCyan ? 0.02 : 0.49;
      pCol[i * 3 + 1] = isCyan ? 0.71 : 0.23;
      pCol[i * 3 + 2] = isCyan ? 0.83 : 0.93;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, opacity: 0.8 })
    );
    scene.add(particles);

    // ── Wireframe distort sphere ──────────────────────────────────────────────
    const wireSphere = new THREE.Mesh(
      new THREE.SphereGeometry(4.5, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.06 })
    );
    scene.add(wireSphere);

    // ── Outer rings ───────────────────────────────────────────────────────────
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(5, 0.015, 2, 200), ring1Mat);
    ring1.rotation.x = Math.PI / 2;
    scene.add(ring1);

    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(6.5, 0.01, 2, 200), ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = 0.3;
    scene.add(ring2);

    // ── Animation loop ────────────────────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      coinGroup.rotation.y = t * 0.4;
      coinGroup.rotation.x = Math.sin(t * 0.2) * 0.15;
      coinGroup.position.y = Math.sin(t * 0.8) * 0.3;

      particles.rotation.y = t * 0.12;
      particles.rotation.x = Math.sin(t * 0.05) * 0.1;

      wireSphere.rotation.y = t * 0.15;

      ring1.rotation.z = t * 0.2;
      ring2.rotation.x = Math.PI / 3 + t * 0.15;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize handler ────────────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
