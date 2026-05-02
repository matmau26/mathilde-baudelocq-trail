import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Plan photo distordu — la texture (photo de Mathilde) ondule comme un drapeau
 * subtil, et la position Z respire au scroll.
 */
function PhotoPlane({ url }) {
  const meshRef = useRef(null);
  const texture = useLoader(THREE.TextureLoader, url);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Géométrie haute résolution pour que la distortion soit fluide
  const geometry = useMemo(
    () => new THREE.PlaneGeometry(2.3, 3.45, 64, 96),
    []
  );

  // Mémorise la position initiale de chaque vertex pour la perturber
  const original = useMemo(() => {
    const arr = new Float32Array(geometry.attributes.position.array);
    return arr;
  }, [geometry]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const positions = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const ix = i * 3;
      const x = original[ix];
      const y = original[ix + 1];
      // Vague combinée : sinus + bruit léger
      const wave =
        Math.sin(x * 1.6 + t * 1.1) * 0.04 +
        Math.cos(y * 1.4 + t * 0.8) * 0.04;
      positions.array[ix + 2] = wave;
    }
    positions.needsUpdate = true;

    // Float doux sur Y
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 0.4) * 0.05;
      meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow>
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        roughness={0.55}
        metalness={0.05}
      />
    </mesh>
  );
}

/**
 * Champ de particules flame qui flottent autour de la photo.
 */
function FlameParticles({ count = 350 }) {
  const ref = useRef(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // distribution dans une coquille autour de l'origine
      const r = 2 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(1 - 2 * Math.random());
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi) - 1;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.04;
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ff7338"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Caméra qui suit la souris avec damping.
 */
function MouseCamera() {
  const { camera, mouse } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame(() => {
    target.current.x += (mouse.x * 0.5 - target.current.x) * 0.05;
    target.current.y += (mouse.y * 0.3 - target.current.y) * 0.05;
    camera.position.x = target.current.x;
    camera.position.y = target.current.y;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/**
 * Halo radial flame en arrière-plan derrière la photo.
 */
function Halo() {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.scale.setScalar(
        1 + Math.sin(clock.elapsedTime * 0.6) * 0.08
      );
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <circleGeometry args={[3.5, 64]} />
      <meshBasicMaterial color="#ff4d18" transparent opacity={0.35} />
    </mesh>
  );
}

export default function Hero3DScene({ photoUrl }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.6], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="!h-full !w-full"
    >
      <color attach="background" args={['#0f1c29']} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color="#ffe48a" />
      <pointLight position={[-2, 1, 3]} intensity={0.8} color="#ff7338" />
      <pointLight position={[2, -1, 4]} intensity={0.5} color="#60a5fa" />

      <Suspense fallback={null}>
        <Halo />
        <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.6}>
          <PhotoPlane url={photoUrl} />
        </Float>
        <FlameParticles count={500} />
        <Environment preset="sunset" />
      </Suspense>

      <MouseCamera />

      {/* Brouillard chaud */}
      <fog attach="fog" args={['#0f1c29', 5, 11]} />
    </Canvas>
  );
}
