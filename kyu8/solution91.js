//Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
  const { x:x1, y:y1 } = a
  const { x:x2, y:y2 } = b
  let d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
  return d
}