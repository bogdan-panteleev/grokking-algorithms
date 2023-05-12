export interface Graph {
  name: string;
  connections: Connection[];
}

export interface Connection {
  target: Graph;
  weight: number;
}

export function createGraph(
  source: Record<string, { weight: number; name: string }[]>,
  at: string,
): Graph | null {
  if (!source[at]) return null;

  const queue = [at];
  const handledMap: Record<string, boolean> = {};
  const nodesMap: Record<string, Graph> = {
    [at]: { name: at, connections: [] },
  };

  while (queue.length) {
    const place = queue.shift();
    if (handledMap[place]) continue;
    handledMap[place] = true;

    for (let target of source[place]) {
      if (!nodesMap[target.name]) {
        nodesMap[target.name] = { name: target.name, connections: [] };
      }
      const node: Graph = nodesMap[target.name];

      nodesMap[place].connections.push({ weight: target.weight, target: node });

      if (!handledMap[target.name]) {
        queue.push(target.name);
      }
    }
  }

  return nodesMap[at];
}
