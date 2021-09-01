function branchSums(root) {
    // Write your code here.
      let branchSums = [];
      let currentNode = root;
      
      function sumBranches(node, currentVal = 0){
          currentVal += node.value;
          if (node.left) sumBranches(node.left, currentVal);
          if (node.right) sumBranches(node.right, currentVal);
          if (!node.left && !node.right) branchSums.push(currentVal)
      }
      
      sumBranches(currentNode);
      
      return branchSums;
}