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
        let parentNode, parentNodeDir, replacementParentNode, replacementParentNodeDir, replacementNode
        let currentNode = this
        let returnNode = null

        // if no more current node, value not found, return null

        // prev node tracks node before return node to remove branch once found
        // will have to re set branches coming from return node later



        while(currentNode){
            if(currentNode.value === value){
                // return node found
                returnNode = currentNode


                // ***** account for last node in tree

                if(!parentNode && !currentNode.right && !currentNode.left){
                    returnNode
                }


                if(currentNode.right){
                    replacementParentNode = currentNode
                    replacementParentNodeDir = "right"
                    currentNode = currentNode.right
                    while(currentNode.left || currentNode.right){
                        replacementParentNode = currentNode
                        if(currentNode.left){
                            replacementParentNodeDir = "left"
                            currentNode = currentNode.left
                        } else {
                            replacementParentNodeDir = "right"
                            currentNode = currentNode.right
                        }
                    }

                    // ***** if replacement parent node is return node figure something out

                    debugger

                    if(replacementParentNodeDir === "left"){
                        replacementParentNode.left = null
                    } else {
                        replacementParentNode.right = null
                    }
                    replacementNode = currentNode



                } else if(currentNode.left){
                    replacementParentNode = currentNode
                    replacementParentNodeDir = "left"
                    currentNode = currentNode.left
                    while(currentNode.right || currentNode.left){
                        replacementParentNode = currentNode
                        if(currentNode.right){
                            replacementParentNodeDir = "right"
                            currentNode = currentNode.right
                        } else {
                            replacementParentNodeDir = "left"
                            currentNode = currentNode.left
                        }
                    }
                    if(replacementParentNodeDir === "left"){
                        replacementParentNode.left = null
                    } else {
                        replacementParentNode.right = null
                    }
                    replacementNode = currentNode
                    
                } else {
                    debugger
                }


                // now you have your replacement node, ties to it cut
                

                // ***** account for no replacement node

                if(parentNode){
                    if(parentNodeDir === 'left'){
                        parentNode.left = replacementNode
                    } else {
                        parentNode.right = replacementNode
                    }
                replacementNode.left = returnNode.left
                replacementNode.right = returnNode.right
                returnNode.left = null
                returnNode.right = null

                return returnNode

                } else {


                    // ***** Don't like this, changing values instead of moving nodes around properly. 
                    // ***** Couldn't think of a way to do this, tree variable would be pointing to return node, not replacement node that now points to tree.
                    // ***** Ideally, maybe make tree its own structure that holds individual nodes? Easy to reset head that way
                    [replacementNode.value, this.value] = [this.value, replacementNode.value]
                    return replacementNode
                }

            } else if(value > currentNode.value){
                parentNode = currentNode
                parentNodeDir = "right"
                currentNode = currentNode.right
            } else {
                parentNode = currentNode
                parentNodeDir = "left"
                currentNode = currentNode.left
            }
        }
        
        return tree
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

console.log(tree.remove(10))
console.log(tree)
console.log(tree.remove(13))
console.log(tree.remove(2))
console.log(tree)
