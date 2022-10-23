const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

/************************************************************************************************/
/** has */
/************************************************************************************************/

/**
 * hasDFS - Performs DFS and return a boolean whether graph can be traversed from src to dest
 * @param {object} graph
 * @param {string} src
 * @param {string} dest
 * @returns `boolean`
 */
function hasDFS(graph, src, dest) {
  if (!Object.keys(graph) || !graph?.[src] || !graph?.[dest]) return null;
  else {
    let doesExist = false;
    function search(node) {
      if (node === dest) doesExist = true;
      for (let i = 0; i < graph[node].length; i++) {
        search(graph[node][i]);
      }
      return doesExist;
    }
    return search(src);
  }
}

/**
 * hasBFS - Performs BFS and return a boolean whether graph can be traversed from src to dest
 * @param {object} graph
 * @param {string} src
 * @param {string} dest
 * @returns `boolean`
 */
function hasBFS(graph, src, dest) {
  if (!Object.keys(graph) || !graph?.[src] || !graph?.[dest]) return null;
  else {
    const Q = [src];
    while (Q.length > 0) {
      const node = Q.shift();
      if (node === dest) return true;
      for (let i = 0; i < graph[node].length; i++) {
        Q.push(graph[node][i]);
      }
    }
    return false;
  }
}

console.log(hasDFS(graph, 'f', 'k')); // true
console.log(hasDFS(graph, 'f', 'j')); // false
console.log(hasBFS(graph, 'f', 'k')); // true
console.log(hasBFS(graph, 'f', 'j')); // false
