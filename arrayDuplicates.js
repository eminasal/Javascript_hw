function arrayDuplicates(arrayF){
	arrayF.sort();
	for(var i=0; i < arrayF.length; i++){
		if(arrayF[i] != arrayF[i+1]){
				delete arrayF[i]}
	}
	return arrayF;
}	

niz = [1,1,113,1,5,6,2,6,10,113,7,4,6];
console.log(arrayDuplicates(niz));