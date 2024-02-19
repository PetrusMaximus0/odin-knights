import BFS from './BreathFirstSearch.js';

class Problem {
	constructor(initialState, destination) {
		this.initial = initialState;
		this.destination = destination;
	}
	isGoal = (state) => {
		return state[0] === this.destination[0] && state[1] === this.destination[1];
	};

	actions(state) {
		const preActs = [
			[2, 1],
			[2, -1],
			[-2, 1],
			[-2, -1],
			[1, 2],
			[1, -2],
			[-1, 2],
			[-1, -2],
		];

		const acts = [];
		preActs.forEach((action) => {
			let x = state[0] + action[0];
			let y = state[1] + action[1];
			if (x <= 7 && x >= 0 && y <= 7 && y >= 0) acts.push(action);
		});
		return acts;
	}

	result(state, action) {
		return [state[0] + action[0], state[1] + action[1]];
	}
}

function knightMoves(initial, destination) {
	const prob = new Problem(initial, destination);
	prob.isGoal([3, 3]);
	const solution = BFS(prob);
	const printSol = [solution.state];

	if (solution.parentNode) {
		let temp = solution;
		while (temp.parentNode) {
			printSol.push(temp.parentNode.state);
			temp = temp.parentNode;
		}
		return printSol.reverse();
	} else {
		return solution.state;
	}
}

//console.log(knightMoves([0, 0], [3, 3]));
//console.log(knightMoves([3, 3], [3, 3]));
//console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));
console.log(knightMoves([7, 7], [3, 3]));
console.log(knightMoves([3, 5], [1, 7]));
