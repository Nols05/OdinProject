
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

}


class Tree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        arr.sort((a, b) => b - a);
        let set = new Set(arr);
        arr = [...set];

        const build = (start, end) => {
            if (start > end) return null;

            const mid = Math.floor((start + end) / 2);
            const node = new Node(arr[mid]);

            node.left = build(start, mid - 1);
            node.right = build(mid + 1, end);

            return node;
        };

        return build(0, arr.length - 1);
    }

    insert(value) {

        const newNode = new Node(value);

        const insertNode = (node, value) => {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                }
                else {
                    insertNode(node.left, value)
                }
            }
            else {
                if (node.right === null) {
                    node.right = newNode;
                }
                else {
                    insertNode(node.right, value)
                }
            }

        };

        insertNode(this.root, value);
    }

    deleteItem(value) {
        const removeNode = (node, value) => {
            if (node === null) {
                return null;
            }

            if (value < node.data) {
                node.left = removeNode(node.left, value);
                return node;

            } else if (value > node.data) {
                node.right = removeNode(node.right, value);
                return node;
            }
            else {
                //Node to delete found

                //If it has no children
                if (node.left === null && node.right === null) {
                    return null
                }

                //If it has only right child
                if (node.left === null) {
                    return node.right;
                }
                //If it has only left child
                if (node.right === null) {
                    return node.left;
                }

                //If it has both childs
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
        }


        this.root = removeNode(this.root, value);
    }

    find(value) {
        const findNode = (value, root) => {
            if (root === null) {
                return null;
            }

            if (value === root.data) {
                return root;
            }
            else if (value < root.data) {
                return findNode(value, root.left);
            }
            else {
                return findNode(value, root.right);
            }

        }

        return findNode(value, this.root);
    }

    levelOrder(callback) {
        const queue = [this.root];
        const res = [];

        while (queue.length) {
            const node = queue.shift();

            if (callback)
                callback(node);
            else {
                res.push(node.data);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (!callback) return res;
    }

}



const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};



const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(data);

// prettyPrint(tree.root);

console.log(tree.find(1));



