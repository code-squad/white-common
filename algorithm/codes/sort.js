function swap(array, idx1, idx2) {
	var temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
}

function bsort(array) {
	//var n = array.length;
	for (var n = array.length; n >= 0; n--) { 
		for (var i = 0; i < n - 1; i++) {
			if(array[i] > array[i + 1]) 
				swap(array, i, i +1)
		}
		console.log(array);
	}
}

myarry = [5,3,99,1,6,88,35,17];
//swap(myarry, 0, 2);
bsort(myarry);
console.log(myarry);

