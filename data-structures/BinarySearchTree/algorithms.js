import { BinarySearchTree } from './BinarySearchTree.js';

/** Testing */

const tree = new BinarySearchTree();
tree.add(50, 40, 70, 60, 80, 45, 35, 55, 65, 63, 62);
console.log(JSON.stringify(tree.root));
console.log(tree.min());
console.log(tree.max());
// tree.remove(50);
console.log(JSON.stringify(tree.root));
console.log({ minHeight: tree.minHeight() }); // 2
console.log({ maxHeight: tree.maxHeight() }); // 5
console.log({ isBalanced: tree.isBalanced() }); // false
console.log({ inAscendingOrder: tree.inOrder() }); // [ 35, 40, 45, 50, 55, 60, 62, 63, 65, 70, 80 ]
console.log({ inDescendingOrder: tree.inOrder(1) }); // [ 80, 70, 65, 63, 62, 60, 55, 50, 45, 40, 35 ]
console.log({ preOrderSearch: tree.preOrder() }); // [ 50, 40, 35, 45, 70, 60, 55, 65, 63, 62, 80 ]
console.log({ postOrderSearch: tree.postOrder() }); // [ 35, 45, 40, 55, 62, 63, 65, 60, 80, 70, 50 ]
console.log({ levelOrderSearch: tree.levelOrder() }); // [ 50, 40, 70, 35, 45, 60, 80, 55, 65, 63, 62 ]
console.log({ includes: tree.includes(62) }); // true

/** Tree 
{
    "val":50,
    "left": {
        "val":40,
        "left": {
            "val":35,
            "left":null,
            "right":null
        },
        "right": {
            "val":45,
            "left":null,
            "right":null
        }
    },
    "right": {
        "val":70,
        "left": {
            "val":60,
            "left":null,
            "right":null
        },
        "right": {
            "val":80,
            "left":null,
            "right":null
        }
    }
}
*/

/** After Removal of 50 (Traversing Right) */
/*
{
    "val":60,
    "left": {
        "val":40,
        "left": {
            "val":35,
            "left":null,
            "right":null
        },
        "right": {
            "val":45,
            "left":null,
            "right":null
        }
    },
    "right": {
        "val":70,
        "left":null,
        "right": {
            "val":80,
            "left":null,
            "right":null
        }
    }
}
*/

/** After Removal of 50 (Traversing Left) */
/*
{
    "val":45,
    "left": {
        "val":40,
        "left": {
            "val":35,
            "left":null,
            "right":null
        },
        "right":null
    },
    "right": {
        "val":70,
        "left": {
            "val":60,
            "left":null,
            "right":null
        },
        "right": {
            "val":80,
            "left":null,
            "right":null
        }
    }
}
*/
