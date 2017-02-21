class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class MyList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addFirst(item) {
    var node = new Node(item)
    node.next = this.head
    this.head = node;
    this.length++;
  }

  get(index) {
    var node;
    return node;
  }

  remove(index) {
    var node;
  }
}

var list = new MyList(0);
