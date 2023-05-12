import { Graph } from './Graph';

export function dijkstrasAlgorithm(
  graph: Graph,
  to: string,
): { route: string[]; weight: number } | null {
  const records: Record<
    string,
    { parent: string | null; weight: number; self: Graph }
  > = {
    [graph.name]: { weight: 0, parent: null, self: graph },
  };

  const queue: Graph[] = [graph];
  for (let i = 0; i < queue.length; i++) {
    const node = queue[i];

    for (let connection of node.connections) {
      const savedWeight = records[connection.target.name]?.weight;
      const newWeight = records[node.name].weight + connection.weight;
      if (!savedWeight || newWeight < savedWeight) {
        records[connection.target.name] = {
          weight: newWeight,
          parent: node.name,
          self: connection.target,
        };
      }
      // if (!queue.find((item) => item.name === connection.target.name)) {
      //   queue.push(connection.target);
      // }
    }

    /**
     * Dijkstra algo
     */
    const leftNodes = Object.keys(records).filter(
      (knownNode) => !queue.find((item) => item.name === knownNode),
    );
    if (leftNodes.length === 0) continue;

    const closest = leftNodes.reduce((closest, current) =>
      records[current].weight < records[closest].weight ? current : closest,
    );
    queue.push(records[closest].self);
  }
  let currentStep = records[to];
  if (!currentStep) return null;

  const finalPath: string[] = [to];
  let weight = currentStep.weight;

  while (currentStep.parent) {
    finalPath.push(currentStep.parent);
    currentStep = records[currentStep.parent];
  }

  if (finalPath.reverse()[0] !== graph.name) return null;

  return { weight, route: finalPath };
}

export const graphSource = {
  // example of broken dijkstra algo
  book: [
    { weight: 0, name: 'poster' },
    { weight: 5, name: 'gramophoneRecord' },
  ],
  gramophoneRecord: [{ weight: -7, name: 'poster' }],
  poster: [{ weight: 35, name: 'drums' }],
  drums: [],
  // book: [
  //   { weight: 0, name: 'poster' },
  //   { weight: 5, name: 'gramophoneRecord' },
  // ],
  // gramophoneRecord: [
  //   { weight: 15, name: 'guitar' },
  //   { weight: 20, name: 'drums' },
  // ],
  // poster: [
  //   { weight: 30, name: 'guitar' },
  //   { weight: 35, name: 'drums' },
  // ],
  // drums: [{ weight: 10, name: 'piano' }],
  // guitar: [{ weight: 20, name: 'piano' }],
  // piano: [],
};
