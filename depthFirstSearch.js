class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
          function traverseGraph(vector){
              array.push(vector.name)
              vector.children.forEach(child => traverseGraph(child))
          }
          traverseGraph(this)
          return array;
      }
  }