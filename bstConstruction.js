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
        let prevNode, prevDir, prevBranch, prevBranchDir
        let currentNode = this
        let returnNode = null

        // if no more current node, value not found, return null
        while(currentNode){
            if(currentNode.value === value){
            
                // return node found
                returnNode = currentNode


                // find node for swapping
                // check right tree left side first
                // if no right tree, check left tree right side

                if(returnNode.right){
                    prevBranch = currentNode
                    prevBranchDir = "right"
                    currentNode = returnNode.right
                    
                    while(currentNode.left){
                        prevBranch = currentNode
                        prevBranchDir = "left"
                        currentNode = currentNode.left
                    }

                    // if replacement node has right branch, set prev nodes next to that
                    if(currentNode.right){
                        if(prevBranchDir === "left"){
                            prevBranch.left = currentNode.right
                        } else {
                            prevBranch.right = currentNode.right
                        }
                    }

                    // now that replacement is found
                    // set previous node's value to swapped node
                    if(prevNode){
                        if(prevDir === "right"){
                            prevNode.right = currentNode
                        } else{
                            prevNode.left = currentNode
                        }
                    }
                    


                } else if( returnNode.left){
                    prevBranch = currentNode
                    prevBranchDir = "left"
                    currentNode = returnNode.left

                    while(currentNode.right){
                        prevBranch = currentNode
                        prevBranchDir = "right"
                        currentNode = currentNode.right
                    }

                    // if replacement node has left branch, set prev nodes next to that
                    if(currentNode.left){
                        if(prevBranchDir === "right"){
                            prevBranch.right = currentNode.left
                        } else {
                            prevBranch.left = currentNode.left
                        }
                    }


                     // now that replacement is found
                    // set previous node's value to swapped node
                    if(prevNode){
                        if(prevDir === "right"){
                            prevNode.right = currentNode
                        } else{
                            prevNode.left = currentNode
                        }
                    }
                }

                // set swap nodes nexts to returns
                currentNode.right = returnNode.right
                currentNode.left = returnNode.left
                returnNode.left = null
                returnNode.right = null
            
            } else if(value > currentNode.value){
                prevNode = currentNode
                prevDir = "right"
                currentNode = currentNode.right
            } else {
                prevNode = currentNode
                prevDir = "left"
                currentNode = currentNode.left
            }
        }
        
        //getting null for currentNode and this is still 10

        return returnNode
        // check next nodes, move left node up first, then right
          // continue until value found or nothing
          //if nothing found return null
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

tree.remove(10)
