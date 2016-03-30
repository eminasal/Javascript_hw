/*

// ispisati  brojeve 8, 11 i 13 - jedan ispod drugog
var myArray1 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray1[2][1] + "\n"+myArray1[3][0][1] + "\n"+myArray1[3][1]);

// push() dodati  ["dog", 3] 
var myArray2 = [["John", 23], ["cat", 2]];
myArray2.push(["dog", 3]);
console.log(myArray2);

//izbaciti zadnji element koristeci pop() 
var myArray3 = [["John", 23], ["cat", 2],["dog", 3]];
myArray3.pop([myArray3.length - 1]);
console.log(myArray3);


// izbaciti prvi element iz arraya
myArray3.shift();
console.log(myArray3);

//dodati neki drugi element na pocetak arraya
myArray3.unshift(["lopta"]);
console.log(myArray3);


//brisanje cat i element nakon
var n = myArray3.indexOf('cat');
console.log(n);
myArray3.splice(n,2);
console.log(myArray3);
*/

// Sortirati array i izbaciti duplikate 

function arrayDuplicates(arrayF){
	arrayF.sort();
	for(var i=0; i < arrayF.length; i++){
		if(arrayF[i] == arrayF[i+1]){
			arrayF.splice(i,1)}
	}
	return arrayF;
}


array5 = [4, 3, 2, 5, 8, 3, 6, 10];
console.log(arrayDuplicates(array5));