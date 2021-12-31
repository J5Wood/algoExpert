// Doesn't take up excess space by creating extra array slices.
// uses pointers instead of slices.

function minHeightBst(array) {
    return buildBst(array, null, 0, array.length - 1)
}

function buildBst(array, bst, leftIndex, rightIndex){
    if(leftIndex > rightIndex) return
    const midpoint = Math.floor((leftIndex + rightIndex) / 2)
    if(!bst){
        bst = new BST(array[midpoint])
    } else {
        bst.insert(array[midpoint])
    }
    buildBst(array, bst, leftIndex, midpoint - 1)
    buildBst(array, bst, midpoint + 1, rightIndex)
    return bst
}

  // first attempt

//   function minHeightBst(array) {
// 	let rootIndex = Math.floor(array.length / 2)
// 	const root = new BST(array[rootIndex])
	
// 	function buildBst(array){
// 		if(array.length <= 0) return
// 		let midpoint = Math.floor(array.length / 2)
// 		root.insert(array[midpoint])
// 		buildBst(array.slice(0, midpoint))
// 		buildBst(array.slice(midpoint + 1))
// 	}
// 	buildBst(array.slice(0, rootIndex))
// 	buildBst(array.slice(rootIndex + 1))
	
// 	return root
// }

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
        if (this.left === null) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }
        } else {
        if (this.right === null) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
        }
    }
}

console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]))