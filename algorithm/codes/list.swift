//  Created by 정호영 on 2017. 2. 14..
//  Copyright © 2017년 watple. All rights reserved.

import Foundation

class ListNode {
    var item:Int
    var next:ListNode?
    
    init(_ item:Int) {
        self.item = item
    }
}

//let node = ListNode(5)
//print(node, node.item, node.next ?? "null")

struct LinkedList {
    var head:ListNode?
    var count:Int = 0
    
    init() {
        count = 0
    }
    
    mutating func addFirst(_ item:Int) {
        let node = ListNode(item)
        node.next = self.head
        self.head = node;
        self.count += 1
    }
    
    mutating func addLast(_ item:Int) {
        let node = ListNode(item)
        var old = self.head
        //find last
        while(old!.next != nil) {
            old = old!.next
        }
        old!.next = node;
    }
    
    func get(index:Int) -> Int {
        var node = self.head
        for _ in 0..<index {
            node = node!.next
        }
        return node!.item
        
    }
    
    mutating func remove(index:Int) -> Int {
        var prev:ListNode?
        var cur = self.head
        
        //find previous node and current node
        //we'll delete current node
        for _ in 0..<index {
            prev = cur
            cur = cur!.next
        }
        
        if (prev == nil) {
            self.head = cur!.next
        } else {
            prev!.next = cur!.next
        }
        cur!.next = nil
        self.count -= 1
        return cur!.item
    }
    
    func search(value:Int) -> Int {
        var node = self.head
        var index = 0
        while(node != nil) {
            if(node?.item == value) {
                return index
            }
            node = node!.next
            index += 1
        }
        return -1
    }
    
    func printAll() {
        var node = self.head
        while (node != nil) {
            print(node!.item, terminator:" ")
            node = node?.next
        }
        print()
    }
}

var list = LinkedList()

//test addFirst
for i in 0..<10 {
    list.addFirst(i)
}

//test get
for i in 0..<10 {
    print("list[\(9 - i)] = \(list.get(index: 9 - i))")
}

//test search
print("index of 7 = \(list.search(value: 7))")

//test remove
print(list.remove(index: 0))
print(list.remove(index: list.search(value: 7)))
print(list.remove(index: list.count - 1))
list.printAll()





