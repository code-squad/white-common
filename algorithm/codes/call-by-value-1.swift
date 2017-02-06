func foo(num:Int)
{
    // num += 1 ,this is error on Swift
    let num2 = num + 1
    print("num2: \(num2)")
}

var a = 5
foo(num: a)
print(a)
