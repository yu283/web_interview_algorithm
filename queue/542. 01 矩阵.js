/*给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。
*/

const updateMatrix = function (matrix) {
  const col = matrix[0].length, dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  matrix.forEach((item, i) => item.forEach((s, j) => matrix[i][j] = matrix[i][j] ? getResultBFS(i, j) : 0));

  function getResultBFS(i, j) {
    const queue = [[i, j]], isVisited = {};
    let l = queue.length, deep = 0;
    while (l) {
      while (l--) {
        const [x, y] = queue.shift();
        if (!matrix[x][y]) return deep;
        isVisited[x + '-' + y] = true;
        dir.forEach(([offsetX, offsetY]) => {
          const [newX, newY] = [x + offsetX, y + offsetY];
          if (newX < 0 || newX >= matrix.length || newY < 0 || newY >= col || isVisited[newX + '-' + newY]) return;
          queue.push([newX, newY]);
        })
      }
      deep++;
      l = queue.length;
    }
  }

  return matrix;
};

