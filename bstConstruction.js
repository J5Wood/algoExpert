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

        // prev node tracks node before return node to remove branch once found
        // will have to re set branches coming from return node later


        while(currentNode){
            if(currentNode.value === value){
                
                // return node found
                returnNode = currentNode


                // find node for swapping
                // check right tree left side first
                // if no right tree, check left tree right side
                // once no more next nodes on a path, replacement found
                // set currentNode to found replacement
                // track "prev branch", node and cdirection so you can remove it's connection to replacement node

                if(returnNode.right){
                    prevBranch = currentNode
                    prevBranchDir = "right"
                    currentNode = returnNode.right
                    
                    while(currentNode.left){
                        prevBranch = currentNode
                        prevBranchDir = "left"
                        currentNode = currentNode.left
                    }

                    // set prev branch legs to null if replacement has no legs,
                    // if replacement node has right branch, set prev nodes next to that
                    if(prevBranchDir === "left"){
                        if(currentNode.right){
                            prevBranch.left = currentNode.right
                        } else {
                            prevBranch.left = null
                        }
                    } else {
                        if(currentNode.right){
                            prevBranch.right = currentNode.right
                        } else {
                            prevBranch.right = null
                        }
                    }
                
                    // ****** Not re-setting nodes correctly in middle of tree ******
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
                    if(prevBranchDir === "right"){
                        if(currentNode.left){
                            prevBranch.right = currentNode.left
                        } else {
                            prevBranch.right = null
                        }
                    } else {
                        if(currentNode.left){
                            prevBranch.left = currentNode.left
                        } else {
                            prevBranch.left = null
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

                // set this value to replacement value, null currentNode to exit
                this.value = currentNode.value
                currentNode = null

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
        

        return this
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

console.log(tree.remove(13))
