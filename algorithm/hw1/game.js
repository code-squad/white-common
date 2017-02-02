module.exports = class Game {
	constructor() {
		//init
		this.arr = [];
		for (var i = 0; i < 4; i++) {
				this.arr.push([]);
			for (var j = 0; j < 4; j++) {
				this.arr[i].push(i * 4 + j + 1); }
		}
		this.arr[3][3] = -1;
		this.cursor_i = 3;
		this.cursor_j = 3;
		this.shuffle();
	}

	findLocation(value) {
		for (let i = 0; i < 4; i++)
			for (let j = 0; j < 4; j++)
				if (this.arr[i][j] == value) {
					return { "i": i, "j": j};
				}
		return -1;
	}

	available() {
		var ret = [];
		if (this.cursor_i > 0)
			ret.push(this.arr[this.cursor_i -1][this.cursor_j]);
		if (this.cursor_i < 3)
			ret.push(this.arr[this.cursor_i + 1][this.cursor_j]);
		if (this.cursor_j > 0)
			ret.push(this.arr[this.cursor_i][this.cursor_j - 1]);
		if (this.cursor_j < 3)
			ret.push(this.arr[this.cursor_i][this.cursor_j + 1]);
		return ret;
	}

	//if available then swap 
	swap(value) {
		var move;
		var ok = this.available();
		if (ok.indexOf(value) === -1) {
			console.log("This move is ilegal!");
			return;
		} else {
			move = this.findLocation(value);
		}

		this.arr[move.i][move.j] = -1;
		this.arr[this.cursor_i][this.cursor_j] = value;
		this.cursor_i = move.i;
		this.cursor_j = move.j;
	}

	shuffle() {
		for(var i = 0; i < 100; i++) {
			var values = this.available();
			var idx = Math.floor((Math.random() * values.length));
			this.swap(values[idx]);
		}
	}

	print() {
		var str = "";
		this.arr.forEach(function(arr2) {
			arr2.forEach(function(num) {
				if (num == -1)
					str += "[  ]"
				else if (num <= 9) 
					str += "[ " + num + "]";
				else 
					str += "[" + num + "]";
			});
			str +="\n"
		});
	console.log(str);
	}
}

/*
g = new Game();
g.print();
console.log(g.available());
console.log(g.findLocation(5));
g.swap(12);
g.print();
g.swap(11);
g.print();
*/
