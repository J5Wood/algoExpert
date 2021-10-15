class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
          let addNode = new BST(value)
          let currentNode = this
          let placingNode = true
          
          while(placingNode) {
              if(addNode.value < currentNode.value){
                  if(!currentNode.left){
                      currentNode.left = addNode
                      placingNode = false
                  } else {
                      currentNode = currentNode.left
                  }
              } else {
                  if(!currentNode.right) {
                      currentNode.right = addNode
                      placingNode = false
                  } else {
                      currentNode = currentNode.right
                  }
              }
          }
      return this;
    }
  
    contains(value) {
      let currentNode = this
          while(currentNode){
              if(currentNode.value === value){
                  return true
              } else if(currentNode.value > value){
                  currentNode = currentNode.left
              } else {
                  currentNode = currentNode.right
              }
          }
          return false
    }
  
    remove(value) {
          
      return this;
    }
}

let tree = new BST(10)

tree.insert(5)
tree.insert(15)
tree.insert(2)
tree.insert(5)
tree.insert(13)
tree.insert(22)
tree.insert(1)
tree.insert(14)
tree.insert(12)

console.log(tree.contains(15))
console.log(tree.contains(7))
console.log(tree.contains(12))

// tree.remove(10)
