struct MyArray {
    var array = Array<Any>()

    mutating func insert(index: Int, value: Any) {
        self.array.insert(value, at: index)
    }
    
    func delete(index: Int) {
        
    }
    
    func get(index: Int) -> Any {
        return self.array[index]
    }
    
    func search(value: Any) -> Int {
    
        return 0
    }
    
    func update(index: Int, value: Any) {
        
    }
    
    func length() -> Int {
        return 0
    }
    
    func printAll() {
        print(self.array)
    }
}

struct MyTest {
    var numTest = 0;
    var success = 0;
    mutating func assert(condition: Bool, msg: String) {
        numTest += 1
        if(!condition) {
            print("Test", numTest, msg, "test fail.")
        }
        else {
            success += 1
        }
    }
    func printTestResult() {
        print(success, "/", numTest, "test success.");
    }
}




var a = MyArray()
var test = MyTest()

for i in 0..<10 {
    a.insert(index:i, value: i)
}
test.assert(condition: a.get(index: 5) as? Int == 5, msg: "Insert")
a.delete(index: 5)
test.assert(condition: a.get(index: 5) as? Int == 6, msg: "Delete")


a.printAll()
test.printTestResult()
