class MyArray {
	constructor() {
		this.arr = [];
	}

	get(index) {
		return this.arr[index];
	}

	insert(index, value) {
		this.arr.splice(index, 0, value);
	}

	delete(index) {
		this.arr.splice(index, 1);
	}

	printAll() {
		console.log(JSON.stringify(this.arr));
	}

	get length() {
		return this.arr.length;
	}

	//search value and return index of the value
	search(value) {
		for (let i = 0; i < this.arr.length; i++) {
			if (this.arr[i] == value)
				return i;
		}
		return -1;
	}
}

/*****************
 * test code 
 * ignore below
 *****************/
var testcount = 0;
var success = 0;
var assert = function(condition, msg) {
	testcount++;
	if(!condition) {
		console.log(msg + " test fail.");
	}
	else
		success++;
}

var testResult = function() {
	console.log(success + "/" + testcount + " test passed.");
}

var a = new MyArray();
for (let i = 0; i < 10; i++) {
	a.insert(i, i);
}

a.printAll();

assert(a.length === 10, "Array size");
assert(a.search(6) === 6, "Search");

for (let i = 8; i >=0; i-=2) {
	a.delete(i);
}

a.printAll();
assert(a.length === 5, "Delete");
assert(a.search(6) === -1, "Not found");
testResult();
