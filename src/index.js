/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr = []) {
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[arr[arr[i]-1]-1]==i+1){
      count = count+1;
    }
  }
  return Math.floor(count/3);
};
