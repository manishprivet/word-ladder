import type Graph from './graph';

export interface PathData {
	path: string[];
	length: number;
}

// Breadth First Search (BFS) implementation in JS/TS
export const bfsPathSync = (ADT: Graph, start: string, end: string): PathData => {
	// Start with an empty Queue
	const queue = [];
	// Add the start node to the queue
	queue.push(start);

	// Create a new map for predecessors
	const pred = new Map();

	// Iterate while queue contains elements
	while (queue.length) {
		const current = queue[0];
		queue.splice(0, 1);
		ADT.visit(current);

		// Iterate over current edge to find the next node
		ADT.edge(current).forEach((newpos) => {
			if (ADT.go(newpos) === 0 && !queue.includes(newpos)) {
				queue.push(newpos);
				pred.set(newpos, current);
			}
		});

		// Break the loop when end node is reached
		if (current === end) break;
	}

	// Calculate Path
	let previous = end;
	const path = [];
	while (pred.size) {
		path.splice(0, 0, previous);
		if (previous === start) break;
		previous = pred.get(previous);
	}
	return { length: path.length - 1, path };
};

export const bfsPath = (graph: Graph, start: string, end: string): Promise<PathData> =>
	new Promise((resolve) => {
		const pathData = bfsPathSync(graph, start, end);
		resolve(pathData);
	});
