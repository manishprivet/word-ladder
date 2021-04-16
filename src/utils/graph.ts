// Graph Implementation using HashMap in JavaScript/TypeScript
// Copyright 2021 - Manish Kumar

class Graph {
	graph: Map<string, Map<string, number>>;
	visited: Map<string, number>;

	constructor() {
		this.graph = new Map();
		this.visited = new Map();
	}

	append(vertexId: string, edge: string, weight: number): void {
		if (!this.graph.get(vertexId)) {
			this.graph.set(vertexId, new Map<string, number>());
			this.visited.set(vertexId, 0);
		}
		if (!this.graph.get(edge)) {
			this.graph.set(edge, new Map<string, number>());
			this.visited.set(edge, 0);
		}
		this.graph.get(vertexId).set(edge, weight);
	}

	edge(vertexId: string): string[] {
		return Array.from(this.graph.get(vertexId).keys());
	}

	visit(vertexId: string): void {
		this.visited.set(vertexId, 1);
	}

	go(vertexId: string): number {
		return this.visited.get(vertexId);
	}

	route(): Map<string, number> {
		return this.visited;
	}

	clear(): void {
		this.visited.clear();
	}
}

export default Graph;