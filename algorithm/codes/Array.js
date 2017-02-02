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
		for(let i = 0; i < this.arr.length; i++) {
			console.log(this.get(i));
		}
	}

	get length() {
		return this.arr.length;
	}

	search(value) {
		for (var i = 0; i < this.arr.length; i++) {
			if (this.arr[i] == value)
				return i;
		}
		return -1;
	}
}

var a = new MyArray();
for (let i = 0; i < 10; i++) {
	a.insert(i, i * 10);
}
a.printAll();
console.log("a length = " + a.length);
console.log(a.search(60))

for (let i = 0; i < 10; i+=2) {
	a.delete(i);
}
a.printAll();
console.log("a length = " + a.length);
console.log(a.search(60))
