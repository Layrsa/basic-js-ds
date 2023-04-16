const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root1 = null;
  }

  root() {
    return this.root1 ? this.root1 : null;
  }

  add(data) {
    function add_node(node, data) {
      if(!node) {
        return new Node(data);
      } else if(node.data === data) {
        return node;
      } else if(node.data > data) {
        node.left = add_node(node.left, data);
      } else if(node.data < data) {
        node.right = add_node(node.right, data);
      }
      return node;
    }

    this.root1 = add_node(this.root1, data);
  }

  has(data) {
    function check_node(node, data) {
      if(!node) {
        return false;
      } else if(node.data === data) {
        return true;
      } else if(node.data > data) {
        return check_node(node.left, data);
      } else if(node.data < data) {
        return check_node(node.right, data);
      }
      return false;
    }

    return check_node(this.root1, data);
  }

  find(data) {
    function find_node(node, data) {
      if(!node) {
        return null;
      } else if(node.data === data) {
        return node;
      } else if(node.data > data) {
        return find_node(node.left, data);
      } else if(node.data < data) {
        return find_node(node.right, data);
      }
      return null;
    }

    return find_node(this.root1, data);
  }

  remove(data) {
    function remove_node(node, data) {
      if(!node) {
        return null;
      } else if(node.data === data) {
        if (!node.left && !node.right) {
          return null;
        };
        if(!node.left && node.right) {
          return node.right;
        };
        if(!node.right && node.left) {
          return node.left;
        };

        let smallest = node.right;
        while (smallest.left) {
          smallest = smallest.left;
        }
        node.data = smallest.data;
        node.right = remove_node(node.right, smallest.data);
        return node;

      } else if(node.data > data) {
        return remove_node(node.left, data);
      } else if(node.data < data) {
        return remove_node(node.right, data);
      }
    }

    remove_node(this.root1, data);
  }

  min() {
    if (!this.root1) return null;
    let node = this.root1;
    while (node.left) node = node.left;
    return node.data;
  }

  max() {
    if (!this.root1) return null;
    let node = this.root1;
    while (node.right) node = node.right;
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};