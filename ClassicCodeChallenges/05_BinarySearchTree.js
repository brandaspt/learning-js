/*
You are given a list of numbers stored in a list, A.
Build a [Binary Search Tree] to store these numbers.
You will need to:
  - Represent each node of the tree (including its data, left child and right child).
  - Print the tree out in an understandable form.
  - Make a function to insert a list of numbers (A) into the tree.
  - Check if you can insert all the numbers in A into your tree, and that it prints out as expected.
*/

class _Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        if (this.root === null) {
            this.root = new _Node(data)
            return
        }
        var recInsert = function (value, node) {
            if (value <= node.data) {
                if (node.left == null) {
                    node.left = new _Node(value)
                } else {
                    recInsert(value, node.left)
                }
            } else {
                if (node.right == null) {
                    node.right = new _Node(value)
                } else {
                    recInsert(value, node.right)
                }
            }
        }
        recInsert(data, this.root)
    }

    insertArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i])
        }
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
    }

    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data)
        }
    }

    preOrder(node) {
        if (node !== null) {
            console.log(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
}

const A = [8, 4, 12, 1, 5, 10, 3, 7, 11]
let BST = new BinarySearchTree()
BST.insertArray(A)
BST.inOrder(BST.root)
BST.postOrder(BST.root)
BST.preOrder(BST.root)
