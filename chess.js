function pomjeriKralja(pocetna1, krajnja1){

    var razlika_x = pocetna1[0] - krajnja1[0];

    if(razlika_x < 0){
        razlika_x *= -1;
    }
    
    var razlika_y = pocetna1[1] - krajnja1[1];

    if(razlika_y < 0){
        razlika_y *= -1;
    }

    if(razlika_x> 1 || razlika_y>1  ){
        return"kralj ne moze ici na to polje";
    }
    else{
        return "kralj moze ici na to polje"}
}


var pocetna1 = [4,1];
var krajnja1 = [5,2];
console.log(pomjeriKralja(pocetna1, krajnja1));

function pomjeriKraljicu(pocetna2, krajnja2){

    var razlika_x = pocetna2[0] - krajnja2[0];

    if(razlika_x < 0){
        razlika_x *= -1;
    }
    
    var razlika_y = pocetna2[1] - krajnja2[1];

    if(razlika_y < 0){
        razlika_y *= -1;
    }

    if(razlika_x === 0 && razlika_y === 0){
        return "kraljica miruje"}
        
    else if(razlika_x == razlika_y  ){
        return"kraljica moze ici na to polje";
    }
    else if(razlika_x===0 || razlika_y===0){
        return"kraljica moze ici na to polje"}
    else{
        return "kraljica ne moze ici na to polje"}
}

var pocetna2 = [2,1];
var krajnja2 = [1,8];
console.log(pomjeriKraljicu(pocetna2, krajnja2));

var lokacijaKralja = krajnja1;
var lokacijaKraljice = krajnja2;

console.log("lokacija kralja je [" + lokacijaKralja + "] lokacija kraljice je [" + lokacijaKraljice+"]");

if(lokacijaKralja == lokacijaKraljice){
    alert("kralj i kraljica ne mogu biti na istom polju");
}


