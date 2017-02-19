class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class MyList {
  constructor(item) {
    this.head = new Node(item);
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
list.addFirst(1);
list.addFirst(2);
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
