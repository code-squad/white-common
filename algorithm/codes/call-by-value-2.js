var foo = function(str) {
	// str += " world";
	str = str.concat(" world");
	console.log(`str: ${str}`); //6
}

var a = "hello";
foo(a);
console.log(`a: ${a}`); //5
