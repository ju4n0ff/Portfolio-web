import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Line, OrbitControls, Stars, Text } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import type { Mesh } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import type { NetworkCluster, NetworkEdge, NetworkNode } from "../data/network";

interface SkillsNetworkProps {
  nodes: NetworkNode[];
  edges: NetworkEdge[];
  clusters: NetworkCluster[];
  categoryNames: Record<string, string>;
  hint: string;
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

interface FloatNodeProps {
  node: NetworkNode;
  index: number;
  hovered: number | null;
  reduced: boolean;
  onHover: (index: number | null) => void;
}

function FloatNode({ node, index, hovered, reduced, onHover }: FloatNodeProps) {
  const mesh = useRef<Mesh>(null);
  const isHovered = hovered === index;

  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    if (!reduced) {
      m.position.y = Math.sin(t * 0.6 + index) * 0.04;
      m.position.z = Math.cos(t * 0.4 + index) * 0.03;
    }
    const target = isHovered ? 1.85 : 1;
    const s = m.scale.x + (target - m.scale.x) * 0.16;
    m.scale.setScalar(s);
  });

  return (
    <group position={[node.position[0], node.position[1], node.position[2]]}>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isHovered ? 1.7 : 0.5}
          roughness={0.3}
          metalness={0.05}
        />
      </mesh>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(index);
        }}
        onPointerOut={() => onHover(null)}
      >
        <sphereGeometry args={[0.6, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  );
}

interface SceneProps {
  nodes: NetworkNode[];
  edges: NetworkEdge[];
  clusters: NetworkCluster[];
  categoryNames: Record<string, string>;
  hovered: number | null;
  onHover: (index: number | null) => void;
  reduced: boolean;
  dragging: boolean;
  onDragChange: (dragging: boolean) => void;
  controlsRef: RefObject<OrbitControlsImpl | null>;
}

function Scene({
  nodes,
  edges,
  clusters,
  categoryNames,
  hovered,
  onHover,
  reduced,
  dragging,
  onDragChange,
  controlsRef,
}: SceneProps) {
  return (
    <>
      <fog attach="fog" args={["#161210", 12, 26]} />
      <ambientLight intensity={0.7} />
      <pointLight position={[0, 0, 6]} color="#FAF6F0" intensity={1.2} decay={0} />
      <pointLight position={[-6, -3, -4]} color="#C2703D" intensity={1.8} decay={0} />
      <pointLight position={[6, -3, -2]} color="#D9B36C" intensity={1.4} decay={0} />

      <Stars radius={70} depth={45} count={1600} factor={3.5} saturation={0} fade speed={reduced ? 0 : 0.4} />

      {edges.map((e, i) => {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const hot = hovered !== null && (hovered === e.a || hovered === e.b);
        return (
          <Line
            key={i}
            points={[a.position, b.position]}
            color={hot ? "#D9B36C" : "#F7F2EA"}
            transparent
            opacity={hot ? 0.95 : 0.1}
            lineWidth={hot ? 2 : 1.2}
          />
        );
      })}

      {nodes.map((node, i) => (
        <FloatNode
          key={node.id}
          node={node}
          index={i}
          hovered={hovered}
          reduced={reduced}
          onHover={onHover}
        />
      ))}

      {clusters.map((cluster) => (
        <Billboard key={cluster.key} position={cluster.labelPosition}>
          <Text
            fontSize={0.38}
            letterSpacing={0.16}
            color={cluster.color}
            fillOpacity={0.36}
            anchorX="center"
            anchorY="middle"
          >
            {categoryNames[cluster.key]}
          </Text>
        </Billboard>
      ))}

      <OrbitControls
        ref={controlsRef}
        makeDefault
        enableZoom
        enablePan={false}
        minDistance={4.5}
        maxDistance={20}
        autoRotate={!reduced && !hovered && !dragging}
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.08}
        onStart={() => onDragChange(true)}
        onEnd={() => onDragChange(false)}
      />
    </>
  );
}

export function SkillsNetwork({
  nodes,
  edges,
  clusters,
  categoryNames,
  hint,
}: SkillsNetworkProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [boxW, setBoxW] = useState(0);
  const [boxH, setBoxH] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const measure = () => {
      setBoxW(el.clientWidth);
      setBoxH(el.clientHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const aspect = boxH > 0 ? boxW / boxH : 1.6;
  const stretch = Math.max(0.45, Math.min(2.4, aspect / 1.5));

  const viewNodes = useMemo<NetworkNode[]>(
    () =>
      nodes.map((n) => ({
        ...n,
        position: [n.position[0] * stretch, n.position[1], n.position[2]] as [number, number, number],
      })),
    [nodes, stretch]
  );

  const viewClusters = useMemo<NetworkCluster[]>(
    () =>
      clusters.map((c) => ({
        ...c,
        position: [c.position[0] * stretch, c.position[1], c.position[2]] as [number, number, number],
        labelPosition: [
          c.labelPosition[0] * stretch,
          c.labelPosition[1],
          c.labelPosition[2],
        ] as [number, number, number],
      })),
    [clusters, stretch]
  );

  const hoveredNode = hovered !== null ? viewNodes[hovered] : null;

  const reset = () => {
    controlsRef.current?.reset();
  };

  return (
    <div>
      <div
        ref={container}
        role="img"
        aria-label={hint}
        className="relative mx-auto h-[72vh] min-h-[480px] w-full max-w-5xl overflow-hidden border-y border-ink/10"
        style={{ cursor: dragging ? "grabbing" : hovered !== null ? "pointer" : "grab" }}
        onDoubleClick={reset}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 40%, #2B2620 0%, #1C1917 62%, #15110D 100%)",
          }}
        />

        <div className="absolute left-5 top-5 z-10 sm:left-8 sm:top-8">
          <AnimatePresence mode="wait">
            {hoveredNode ? (
              <motion.div
                key={hoveredNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="pointer-events-none max-w-[16rem] rounded-xl bg-espresso/85 px-5 py-4 shadow-xl ring-1 ring-line backdrop-blur-md sm:max-w-xs"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                  {categoryNames[hoveredNode.category]}
                </span>
                <span className="mt-1 block font-display text-2xl font-semibold text-cream">
                  {hoveredNode.label}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-cream/60">
                  {hoveredNode.hint}
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="pointer-events-none max-w-[16rem] rounded-xl bg-espresso/60 px-5 py-4 ring-1 ring-line backdrop-blur-md sm:max-w-xs"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                  Skills
                </span>
                <span className="mt-1 block font-display text-2xl font-semibold text-cream">
                  {nodes.length} nodos
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-cream/60">
                  4 categorías · explora la red
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute bottom-5 right-5 z-10 rounded-full bg-ink/45 px-4 py-2 text-[11px] font-medium tracking-wide text-cream/75 backdrop-blur-md sm:bottom-7 sm:right-8">
          {hint}
        </div>

        <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 10.5], fov: 42 }} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <Scene
              nodes={viewNodes}
              edges={edges}
              clusters={viewClusters}
              categoryNames={categoryNames}
              hovered={hovered}
              onHover={setHovered}
              reduced={reduced}
              dragging={dragging}
              onDragChange={setDragging}
              controlsRef={controlsRef}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}