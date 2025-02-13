// Exercitiul 1.1
var a = 10
let b = "Text"
const c = true
//==========================================================
// Exercitiul 1.2
function tipdate(tip){
    return typeof tip;
}
//console.log(tipdate(a));


//==========================================================
// Exercitiul 1.3

let text = Number("111");
let numar = String(111); 
// console.log("Text: ", text)
// console.log("Numar: ", numar)

//==========================================================
//Exercitiul 1.4

let nume = "Dima";
let varsta = 20;
let afisare = `Ma numesc ${nume} si am ${20} ani`;
//console.log(afisare)

//==========================================================
//Exercitiul 1.5

let num1 = 10
let num2 = 20
let temporara = num1;
num1 = num2;
num2 = temporara;
//console.log(num2)

//==========================================================
//Exercitiul 1.6
function estenullsaunu(a){
    return a === null || a === undefined
}
//console.log(estenullsaunu(num1))

//==========================================================
//Exercitiul 1.7

let student = { nume: "Dima", varsta: 20, prezent: true };
student.universitatea = "USM";
delete student.varsta;
//console.log(student)

//==========================================================
//Exercitiul 1.8

let valori = [42, "text", true, null, { cheie: "valoare" }];

for (let i = 0; i < valori.length; i++) {
    //console.log(`Valoare: ${valori[i]}, Tip: ${typeof valori[i]}`);
}

//==========================================================
//==========================================================
//==========================================================




//EXERCITIUL 2

//=========================================================
//Exercitiul 2.1

function suma (a,b){
    return a+b
}
//console.log(suma(2,3))

//==========================================================
//Exercitiul 2.2

function ariadreptunghi(latime, lungime = 1){
    return latime * lungime
}
// console.log(ariadreptunghi(5,5))
// console.log(ariadreptunghi(5))

//==========================================================
//Exercitiul 2.3

let patrat = function(numar) {
    return numar * numar;
};

// console.log(patrat(5)); 
// console.log(patrat(3));

//==========================================================
//Exercitiul 2.4
function conversie(str) {
    let strMare = str.toUpperCase(); 
    return strMare.length;           
}

// console.log(conversie("testare"));
// console.log(conversie("Test")); 

//==========================================================
//Exercitiul 2.5

function calculeazaDublu(numar) {
    return numar * 2;
}

function calculeazaPatrat(numar) {
    return numar * numar;
}

function calculeazaRezultate(numar) {
    return {
        dublu: calculeazaDublu(numar),
        patrat: calculeazaPatrat(numar)
    };
}

//console.log(calculeazaRezultate(5)); 
//console.log(calculeazaRezultate(8)); 

//==========================================================
//Exercitiul 2.6

const sumacusageata = (a, b) => a + b;

//console.log(sumacusageata(1, 1));


//==========================================================
//Exercitiul 2.7

function aplicaFunctie(array, functie) {
    return array.map(functie);
}

const dubleaza = numar => numar * 2;

let numere = [1, 2, 3, 4, 5];
let rezultate = aplicaFunctie(numere, dubleaza);

//console.log(rezultate);

//==========================================================
//==========================================================


//Exercitiul 3.1
let car = {
    marca: "Hyundai",
    model: "Palisade",
    an: 2023
};

//==========================================================
//Exercitiul 3.2
//console.log(car)
//console.log(car.marca);
//console.log(car["model"]);


//==========================================================
//Exercitiul 3.3
car.culoare = "Negru";
car.an = 2018;
//console.log(car)

//Exercitiul 3.4 
delete car.model;
//console.log(car)
//==========================================================
//==========================================================



