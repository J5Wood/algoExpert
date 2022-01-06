class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
}

// Cleaned up, better use of recursion

function reconstructBst(preOrderTraversalValues) {
    if(preOrderTraversalValues.length === 0) return null
      
      let values = preOrderTraversalValues
      let rightIndex = Infinity
      let leftTree = null 
      let rightTree
      
      for(let i = values.length - 1; values[i] >= values[0] && i > 0; i--){
          rightIndex = i
      }
      
      if(values[1] < values[0]){
          leftTree = reconstructBst(values.slice(1, rightIndex))
      }
      
      rightTree = reconstructBst(values.slice(rightIndex))
      
    return new BST(values[0], leftTree, rightTree);
}


//   Initial attempt
  
//   function reconstructBst(preOrderTraversalValues) {
//       const values = preOrderTraversalValues
//       const root = new BST(values[0])
      
//       function buildTree(node, array){
//           let rightIndex = Infinity
          
//           for(let i = 0; i < array.length; i++){
//               if(array[i] >= node.value) {
//                   rightIndex = i
//                   break
//               }
//           }
          
//           if(array[0] < node.value){
//               let newLeftNode = new BST(array[0])
//               node.left = newLeftNode
//               buildTree(newLeftNode, array.slice(1, rightIndex))
//           }
  
//           if(rightIndex !== Infinity){
//               let newRightNode = new BST(array[rightIndex])
//               node.right = newRightNode
//               buildTree(newRightNode, array.slice(rightIndex + 1))
//           }
//       }
//       buildTree(root, values.slice(1))
      
//       return root
//   }

console.log(reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]))
