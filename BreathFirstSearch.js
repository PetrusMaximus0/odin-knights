function expand(problem, node) {
	const arr = [];
	const allActions = problem.actions(node.state);

	allActions.forEach((action) => {
		let newState = problem.result(node.state, action);
		let cost = node.pathCost + 1;
		arr.push(new Node(newState, node, action, cost));
	});

	return arr;
}

class Node {
	constructor(state, parentNode = null, action = null, pathCost = 0) {
		this.state = state;
		this.parentNode = parentNode;
		this.action = action;
		this.pathCost = pathCost;
	}
}

/** Returns either a solution node or a failure(null) */
export default function BFS(problem) {
	let node = new Node(problem.initial);
	if (problem.isGoal(node.state)) return node;
	const frontier = [node];
	const reachedStates = [problem.initial];
	let solution = null;

	while (frontier.length !== 0 && !solution) {
		//remove oldest element
		let node = frontier[0];
		frontier.splice(0, 1);
		let expandedNode = expand(problem, node);
		expandedNode.every((child) => {
			const { state } = child;
			if (problem.isGoal(state)) {
				solution = child;
				return false;
			}
			const stateInFrontier = reachedStates.find((el) => {
				return el[0] === state[0] && el[1] === state[1];
			});
			if (!stateInFrontier) {
				reachedStates.push(state);
				frontier.push(child);
			}
			return true;
		});
	}

	return solution;
}
