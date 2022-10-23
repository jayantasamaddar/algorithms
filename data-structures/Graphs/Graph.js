/**
 * GraphNode - A Node of the graph and information about its neighbours
 */
class GraphNode {
  constructor(val = null, neighbours = []) {
    this.val = val;
    this.neighbours = neighbours;
  }

  add(...nodes) {
    for (const node of nodes) {
      if (!node instanceof GraphNode) {
        throw new TypeError(`One or more of the arguments are not a GraphNode`);
      } else {
        this.neighbours.push(node);
      }
    }
    return this;
  }
}

/** Testing */
const nodeA = new GraphNode('A');
const nodeB = new GraphNode('B');
const nodeC = new GraphNode('C');
const nodeD = new GraphNode('D');
const nodeE = new GraphNode('E');
const nodeF = new GraphNode('F');

nodeD.add(nodeF);
nodeC.add(nodeE);
nodeB.add(nodeD);
nodeA.add(nodeB, nodeC);

/************************************************************************************************/
// Graph Representation: Adjacency List with Nodes having a value and neighbour Nodes
/************************************************************************************************/
const graph = {
  A: nodeA,
  B: nodeB,
  C: nodeC,
  D: nodeD,
  E: nodeE,
  F: nodeF,
};

// console.log(JSON.stringify(graph, null, 2));
/*
{
  "A": {
    "val": "A",
    "neighbours": [
      {
        "val": "B",
        "neighbours": [
          {
            "val": "D",
            "neighbours": [
              {
                "val": "F",
                "neighbours": []
              }
            ]
          }
        ]
      },
      {
        "val": "C",
        "neighbours": [
          {
            "val": "E",
            "neighbours": []
          }
        ]
      }
    ]
  },
  "B": {
    "val": "B",
    "neighbours": [
      {
        "val": "D",
        "neighbours": [
          {
            "val": "F",
            "neighbours": []
          }
        ]
      }
    ]
  },
  "C": {
    "val": "C",
    "neighbours": [
      {
        "val": "E",
        "neighbours": []
      }
    ]
  },
  "D": {
    "val": "D",
    "neighbours": [
      {
        "val": "F",
        "neighbours": []
      }
    ]
  },
  "E": {
    "val": "E",
    "neighbours": []
  },
  "F": {
    "val": "F",
    "neighbours": []
  }
}
*/

/** Depth First Search - Iterative Method */
function dfsIterative(graph, root) {
  if (!Object.keys(graph)?.length || !graph?.[root]) return null;
  else {
    const result = [];
    const stack = [graph[root]];
    while (stack.length > 0) {
      const node = stack.pop();
      result.push(node.val);
      for (let i = 0; i < node.neighbours.length; i++) {
        stack.push(node.neighbours[i]);
      }
    }
    return result;
  }
}

/** Depth First Search - Recursive Method */
function dfsRecursive(graph, root) {
  if (!Object.keys(graph)?.length || !graph?.[root]) return null;
  else {
    function search(node, result = []) {
      result.push(node.val);
      for (let i = 0; i < node.neighbours.length; i++) {
        search(node.neighbours[i], result);
      }
      return result;
    }
    return search(graph[root]);
  }
}

/** Breadth-First Search - Iterative Method */
function bfsIterative(graph, root) {
  if (!Object.keys(graph)?.length || !graph?.[root]) return null;
  else {
    const result = [];
    const Q = [graph[root]];
    while (Q.length > 0) {
      const node = Q.shift();
      result.push(node.val);
      for (let i = 0; i < node.neighbours.length; i++) {
        Q.push(node.neighbours[i]);
      }
    }
    return result;
  }
}

/** Breadth-First Search - Recursive Method */
function bfsRecursive(graph, root) {
  if (!Object.keys(graph)?.length || !graph?.[root]) return null;
  else {
    function search(Q, result = []) {
      if (Q.length === 0) return result;
      const node = Q.shift();
      result.push(node.val);
      for (let i = 0; i < node.neighbours.length; i++) {
        Q.push(node.neighbours[i]);
      }
      return search(Q, result);
    }
    return search([graph[root]]);
  }
}

console.log(dfsIterative(graph, 'A')); // [ 'A', 'C', 'E', 'B', 'D', 'F' ]
console.log(dfsRecursive(graph, 'A')); // [ 'A', 'B', 'D', 'F', 'C', 'E' ]
console.log(bfsIterative(graph, 'A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log(bfsRecursive(graph, 'A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

/************************************************************************************************/
// Graph Representation: Simplified Adjacency List with only values
/************************************************************************************************/

const graph2 = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: ['F'],
  E: [],
  F: [],
};

/** Depth First Search - Iterative Method */
function dfsIterative2(graph, root) {
  if (!Object.keys(graph)?.length || !graph?.[root]) return null;
  else {
    const result = [];
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      result.push(node);
      for (let i = 0; i < graph[node].length; i++) {
        stack.push(graph[node][i]);
      }
    }
    return result;
  }
}

/** Depth First Search - Recursive Method */
function dfsRecursive2(graph, root) {
  if (!Object.keys(graph)?.length || !graph?.[root]) return null;
  else {
    function search(node, result = []) {
      result.push(node);
      for (let i = 0; i < graph[node].length; i++) {
        search(graph[node][i], result);
      }
      return result;
    }
    return search(root);
  }
}

/** Breadth-First Search - Iterative Method */
function bfsIterative2(graph, root) {
  if (!Object.keys(graph)?.length || !graph?.[root]) return null;
  else {
    const result = [];
    const Q = [root];
    while (Q.length > 0) {
      const node = Q.shift();
      result.push(node);
      for (let i = 0; i < graph[node].length; i++) {
        Q.push(graph[node][i]);
      }
    }
    return result;
  }
}

/** Breadth-First Search - Recursive Method - Simplified */
function bfsRecursive2(graph, root) {
  if (!Object.keys(graph)?.length || !graph?.[root]) return null;
  else {
    function search(Q, result = []) {
      if (Q.length === 0) return result;
      const node = Q.shift();
      result.push(node);
      for (let i = 0; i < graph[node].length; i++) {
        Q.push(graph[node][i]);
      }
      return search(Q, result);
    }
    return search([root]);
  }
}

console.log(dfsIterative2(graph2, 'A')); // [ 'A', 'C', 'E', 'B', 'D', 'F' ]
console.log(dfsRecursive2(graph2, 'A')); // [ 'A', 'B', 'D', 'F', 'C', 'E' ]
console.log(bfsIterative2(graph2, 'A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log(bfsRecursive2(graph2, 'A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
