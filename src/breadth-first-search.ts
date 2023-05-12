import { Graph } from './Graph';

type Route = {
  route: { target: string; weight: number }[];
  graph: Graph;
};

export function breadthFirstSearch(graph: Graph, to: string): string[] | null {
  const queue: Route[] = [{ graph: graph, route: [] }];

  for (let i = 0; i < queue.length; i++) {
    const { graph, route } = queue[i];
    if (graph.name === to) return [];

    for (let connection of graph.connections) {
      if (connection.target.name === to) {
        return route
          .concat({
            weight: connection.weight,
            target: connection.target.name,
          })
          .map((step) => step.target);
      }

      if (!queue.find((item) => item.graph.name === connection.target.name)) {
        queue.push({
          graph: connection.target,
          route: route.concat({
            target: connection.target.name,
            weight: connection.weight,
          }),
        });
      }
    }
  }

  return null;
}

export const graphSource = {
  book: [
    { weight: 1, name: 'poster' },
    { weight: 1, name: 'gramophoneRecord' },
  ],
  gramophoneRecord: [
    { weight: 1, name: 'guitar' },
    { weight: 1, name: 'drums' },
  ],
  poster: [
    { weight: 1, name: 'guitar' },
    { weight: 1, name: 'drums' },
  ],
  drums: [{ weight: 1, name: 'piano' }],
  guitar: [{ weight: 1, name: 'piano' }],
  piano: [],
};
