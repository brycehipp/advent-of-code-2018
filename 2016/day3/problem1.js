var isValidTriangle = (a, b, c) => ( a + b > c) && ( a + c > b ) && ( b + c > a ),
    validCount = 0;

input.split('\n').forEach(triangle => {
  triangle = triangle.trim().split(/\s+/).map(str => parseInt(str.trim(), 10));
  if ( isValidTriangle(triangle[0], triangle[1], triangle[2]) ) validCount++;
});

console.log( 'Valid Triangles: ' + validCount );
