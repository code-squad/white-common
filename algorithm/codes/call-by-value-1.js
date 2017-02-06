var foo = function(num) {
	num++;
	console.log(`num: ${num}`); //6
}

var a = 5;
foo(a);
console.log(`a: ${a}`); //5
