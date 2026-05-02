import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import {
  Sky,
  Float,
  Stars,
  Environment,
} from '@react-three/drei';
import * as THREE from 'three';

/**
 * Monde 3D persistent : montagnes en couches, brume chaude, particules,
 * silhouette runner, billboard portrait. La caméra bouge entre les hotspots
 * (CAMERA_SHOTS) pilotés par l'extérieur via la prop scene.
 */

// Plans caméra par scène — position + lookAt
export const CAMERA_SHOTS = [
  // 0 — Cover : vue large, sunrise plein
  { pos: [0, 1.6, 7.5], target: [0, 1.4, 0] },
  // 1 — Identity : zoom portrait, légère plongée
  { pos: [-1.6, 1.8, 4.6], target: [-0.8, 1.6, 0.5] },
  // 2 — Numbers : recule + monte, vue d'ensemble des chiffres flottants
  { pos: [0, 3, 6.5], target: [0, 2, 0.8] },
  // 3 — Reference : recadre vers le portrait + montagne
  { pos: [2.2, 1.4, 4.8], target: [0, 1.4, 0] },
  // 4 — Gallery : plus loin, vue panoramique
  { pos: [0, 2, 9], target: [0, 1.5, 0] },
  // 5 — History : angle de profil
  { pos: [3.2, 1.8, 5], target: [0, 1.4, 0] },
  // 6 — Goals : vue cinématique avec contre-plongée
  { pos: [-2.5, 2.5, 5.5], target: [0, 2, 0] },
  // 7 — Partnership : zoom rapproché, intime
  { pos: [0.8, 1.4, 3.4], target: [0, 1.4, 0.2] },
];

/**
 * Couches de montagne procédurales — 3 plans avec géométrie déformée
 */
function MountainLayer({ z, color, height, segments = 24, seed = 1 }) {
  const ref = useRef();
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(40, 8, segments, 1);
    const positions = geo.attributes.position;
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = positions.getX(i);
      // Crêtes : sinus + bruit pseudo-aléatoire stable
      const noise =
        Math.sin(x * 0.7 + seed) * 0.5 +
        Math.cos(x * 1.3 + seed * 1.2) * 0.3 +
        Math.sin(x * 2.1 + seed * 2.4) * 0.15;
      positions.setY(i, noise * height + height * 0.3);
    }
    // Le bord bas reste plat pour bien remplir
    positions.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, [segments, height, seed]);

  return (
    <mesh ref={ref} position={[0, -1, z]} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        side={THREE.DoubleSide}
        roughness={1}
        metalness={0}
        flatShading
      />
    </mesh>
  );
}

/**
 * Soleil rouge en arrière — sphère lumineuse avec halo
 */
function Sun({ position = [0, 1.2, -8] }) {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(
        1 + Math.sin(clock.elapsedTime * 0.4) * 0.04
      );
    }
  });
  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial color="#ffb37a" />
      </mesh>
      {/* Halo glow */}
      <mesh>
        <sphereGeometry args={[2.6, 32, 32]} />
        <meshBasicMaterial color="#ff7338" transparent opacity={0.25} />
      </mesh>
      <mesh>
        <sphereGeometry args={[3.8, 32, 32]} />
        <meshBasicMaterial color="#ff4d18" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

/**
 * Particules de poussière chaude qui flottent
 */
function DustParticles({ count = 700 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = Math.random() * 6 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 1;
      speeds[i] = 0.05 + Math.random() * 0.1;
    }
    return { arr, speeds };
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    const pos = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const baseY = positions.arr[i * 3 + 1];
      pos.array[i * 3 + 1] =
        baseY + Math.sin(t * positions.speeds[i] + i) * 0.3;
    }
    pos.needsUpdate = true;
    ref.current.rotation.y = t * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.arr}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#ffd9b8"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Photo de Mathilde montée sur un billboard incliné dans la scène
 */
function PhotoBillboard({ url }) {
  const texture = useLoader(THREE.TextureLoader, url);
  texture.colorSpace = THREE.SRGBColorSpace;
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = 1.4 + Math.sin(clock.elapsedTime * 0.5) * 0.04;
      ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={ref} position={[0, 1.4, 0.3]}>
        {/* Cadre flame */}
        <mesh position={[0, 0, -0.02]}>
          <planeGeometry args={[1.7, 2.5]} />
          <meshBasicMaterial color="#ff4d18" />
        </mesh>
        <mesh>
          <planeGeometry args={[1.6, 2.4]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.5}
            metalness={0.05}
          />
        </mesh>
        {/* Halo derrière */}
        <mesh position={[0, 0, -0.5]} scale={1.6}>
          <planeGeometry args={[2.6, 3.4]} />
          <meshBasicMaterial color="#ff4d18" transparent opacity={0.18} />
        </mesh>
      </group>
    </Float>
  );
}

/**
 * Marqueurs de checkpoint flottant dans la scène — petits points lumineux
 */
function Checkpoints() {
  const positions = [
    [-1.3, 0.6, 1.5],
    [1.4, 0.8, 1.2],
    [-0.6, 1.0, 2.4],
    [1.8, 0.4, 2.6],
    [0.3, 0.5, 3.4],
    [-1.6, 0.7, 3.0],
    [0.9, 1.1, 0.4],
  ];
  return (
    <group>
      {positions.map((p, i) => (
        <Checkpoint key={i} position={p} delay={i * 0.4} />
      ))}
    </group>
  );
}

function Checkpoint({ position, delay }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime + delay;
    ref.current.scale.setScalar(0.04 + Math.sin(t * 2) * 0.01);
    ref.current.material.opacity = 0.5 + Math.sin(t * 2) * 0.3;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="#ff7338" transparent />
    </mesh>
  );
}

/**
 * Caméra qui s'anime entre les "shots" CAMERA_SHOTS[scene]
 * + parallax léger à la souris
 */
function CinematicCamera({ scene = 0 }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 1.4, 0));
  const desiredPos = useRef(new THREE.Vector3(0, 1.6, 7.5));
  const desiredTarget = useRef(new THREE.Vector3(0, 1.4, 0));
  const mouseOffset = useRef(new THREE.Vector3());

  useFrame(({ mouse }, delta) => {
    const shot = CAMERA_SHOTS[scene] || CAMERA_SHOTS[0];
    desiredPos.current.set(...shot.pos);
    desiredTarget.current.set(...shot.target);

    // Parallax souris discret
    mouseOffset.current.set(mouse.x * 0.4, mouse.y * 0.25, 0);

    // Lerp doux vers la position désirée
    camera.position.lerp(
      desiredPos.current.clone().add(mouseOffset.current),
      Math.min(1, delta * 1.6)
    );
    target.current.lerp(desiredTarget.current, Math.min(1, delta * 1.6));
    camera.lookAt(target.current);
  });

  return null;
}

export default function World3D({ scene = 0, photoUrl = '/Maxi2025-1.jpg' }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 1.6, 7.5], fov: 42 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
    >
      {/* CIEL — gradient sunrise via Sky shader */}
      <Sky
        distance={450000}
        sunPosition={[0, 0.05, -1]}
        inclination={0.49}
        azimuth={0.25}
        turbidity={6}
        rayleigh={3}
        mieCoefficient={0.012}
        mieDirectionalG={0.85}
      />

      {/* Étoiles très discrètes en haut du dôme */}
      <Stars
        radius={80}
        depth={20}
        count={1500}
        factor={2.5}
        saturation={0}
        fade
        speed={0.3}
      />

      {/* Brouillard chaud */}
      <fog attach="fog" args={['#ff9968', 8, 22]} />

      {/* Lumière */}
      <ambientLight intensity={0.45} color="#ffd9b8" />
      <directionalLight
        position={[2, 6, -3]}
        intensity={2.2}
        color="#ffb37a"
        castShadow={false}
      />
      <pointLight position={[-3, 2, 4]} intensity={0.6} color="#ff4d18" />
      <pointLight position={[3, 2, 4]} intensity={0.4} color="#60a5fa" />

      <Suspense fallback={null}>
        {/* SOLEIL */}
        <Sun position={[0, 1.4, -10]} />

        {/* MONTAGNES — 3 couches paragraphe */}
        <MountainLayer z={-7} color="#3a2a3f" height={2.4} seed={0.7} />
        <MountainLayer z={-5} color="#5a3a3f" height={1.8} seed={1.4} />
        <MountainLayer z={-3.2} color="#7a4a3f" height={1.2} seed={2.1} />

        {/* Sol éloigné */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[60, 60]} />
          <meshStandardMaterial color="#1a0e1a" roughness={1} />
        </mesh>

        {/* Particules */}
        <DustParticles count={700} />

        {/* Marqueurs de course */}
        <Checkpoints />

        {/* Photo de Mathilde — billboard */}
        <PhotoBillboard url={photoUrl} />

        <Environment preset="sunset" />
      </Suspense>

      <CinematicCamera scene={scene} />
    </Canvas>
  );
}
