const isValidTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a

function transpose(tris) {
  const transposed = []
  for (let i = 0; i < tris.length; i += 3) {
    for (let j = 0; j < 3; j += 1) {
      transposed.push([tris[i + 0][j], tris[i + 1][j], tris[i + 2][j]])
    }
  }
  return transposed
}

const triangles = input.split('\n').map(triangle =>
  triangle
    .trim()
    .split(/\s+/)
    .map(side => +side),
)

const validCount = transpose(triangles).filter(triangle =>
  isValidTriangle(triangle[0], triangle[1], triangle[2]),
).length

console.log(`Valid Triangles: ${validCount}`)
