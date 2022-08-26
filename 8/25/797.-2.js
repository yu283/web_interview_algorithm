/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const stack = []
  const res = []
  const dfs = (graph,cur,tar) => {
    if (cur === tar) {
      res.push(stack.slice())
      return
    }
    for (const y of graph[cur]) {
      stack.push(y)
      dfs(graph,y,tar)
      stack.pop()
    }
  }
  stack.push(0)
  dfs(graph,0,graph.length - 1)
  return res
};
