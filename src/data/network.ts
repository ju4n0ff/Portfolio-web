export type CategoryKey = "frontend" | "backend" | "tools" | "mindset";

export interface NetworkNode {
  id: string;
  label: string;
  category: CategoryKey;
  color: string;
  position: [number, number, number];
}

export interface NetworkEdge {
  a: number;
  b: number;
}

interface CategoryMeta {
  color: string;
  center: [number, number, number];
  radius: number;
}

const CATEGORY_META: Record<CategoryKey, CategoryMeta> = {
  frontend: { color: "#C2703D", center: [-2.9, 1.1, 0.3], radius: 0.95 },
  backend: { color: "#D9B36C", center: [2.9, 1.1, -0.3], radius: 0.8 },
  tools: { color: "#EDE4D3", center: [-2.9, -1.1, -0.5], radius: 1.05 },
  mindset: { color: "#8A8178", center: [2.9, -1.1, 0.5], radius: 0.85 },
};

const CATEGORY_ORDER: CategoryKey[] = ["frontend", "backend", "tools", "mindset"];

function distribute(
  count: number,
  center: [number, number, number],
  radius: number
): [number, number, number][] {
  const points: [number, number, number][] = [];
  for (let i = 0; i < count; i++) {
    const r = radius * Math.sqrt((i + 0.5) / count);
    const a = i * 2.399963;
    points.push([center[0] + r * Math.cos(a), center[1] + r * Math.sin(a), center[2]]);
  }
  return points;
}

export interface NetworkCluster {
  key: CategoryKey;
  color: string;
  position: [number, number, number];
  labelPosition: [number, number, number];
}

export function buildNetwork(lists: Record<CategoryKey, string[]>) {
  const nodes: NetworkNode[] = [];
  const edges: NetworkEdge[] = [];
  const clusterLead: Record<CategoryKey, number> = {
    frontend: -1,
    backend: -1,
    tools: -1,
    mindset: -1,
  };

  CATEGORY_ORDER.forEach((key) => {
    const meta = CATEGORY_META[key];
    const positions = distribute(lists[key].length, meta.center, meta.radius);
    const start = nodes.length;

    lists[key].forEach((label, i) => {
      nodes.push({
        id: `${key}-${i}`,
        label,
        category: key,
        color: meta.color,
        position: positions[i],
      });
      if (i === 0) clusterLead[key] = start;
    });

    const count = lists[key].length;
    for (let i = 0; i < count; i++) {
      edges.push({ a: start + i, b: start + ((i + 1) % count) });
    }
  });

  const cross: [CategoryKey, CategoryKey][] = [
    ["frontend", "backend"],
    ["frontend", "tools"],
    ["backend", "mindset"],
    ["tools", "mindset"],
    ["frontend", "mindset"],
    ["backend", "tools"],
  ];

  cross.forEach(([x, y]) => {
    edges.push({ a: clusterLead[x], b: clusterLead[y] });
  });

  return {
    nodes,
    edges,
    clusters: CATEGORY_ORDER.map((key) => {
      const meta = CATEGORY_META[key];
      return {
        key,
        color: meta.color,
        position: meta.center,
        labelPosition: [
          meta.center[0],
          meta.center[1] + meta.radius + 0.42,
          meta.center[2],
        ] as [number, number, number],
      };
    }),
  };
}