# Knights Travails

A solution to the Knight's Travails project assignment from [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails)

## The Problem

### A short explanation of the problem

Given a chessboard and a Knight Piece at a position A, show the shortest possible path from a point A to a Point B, outputting all the intermediate positions of the Knight along the path.

### Chosen Algorithm - Breadth First Search

A BFS (Breadth First Search) is complete (guarantees returning a solution if there is at least one) and in our problem case, since all the actions(chess moves) by the knight have the same cost(modelled as one turn), then BFS will also return an optimal solution (shortest path).
