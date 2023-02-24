//Test için kullanılan değişkenler
let numberData = 3
let strData = "5"
let undefinedData
let arrayData = ["test1",1,2]
let objectData = {
    id :1, 
    ad : "Atez"}
let nullData = null
let BooleanData = true

/* 1. faktöryel hesabını yapan fonksiyon*/
function fncGetFaktorial(a) {
    let faktorial = 1
    for (let i = 1; i <=a; i++) 
      faktorial = faktorial * i     
   
    return faktorial
}

function FaktorialHesapla(...args) {

  let numbers = args.filter(x => typeof x == "number")
  for (let i = 0; i< numbers.length; i++)    
    console.log(numbers[i] , "Faktoriyel:", fncGetFaktorial(numbers[i]))        
}

FaktorialHesapla(numberData,strData,undefinedData,arrayData,objectData,nullData,BooleanData,15)

/* 2. Birden fazla değişken ya da sınırız değişken alan bir fonksiyon yazarak çarpma işlemi yapmanız */
let sayi1 = 5
let sayi2 = 6
function Carpma(...args) {
  let sayilar = args.filter(x => typeof x === "number")
  let sonuc =0

  if (sayilar.length > 0) {
    sonuc = 1
    sayilar.forEach(element => {sonuc = sonuc*element});
  }

  console.log(sayilar, "Sayıların Çarpım Sonucu :", sonuc)
}

Carpma(sayi1,sayi2,10,2, "100");

//3- Github tarafında eğitimin ilk gününde yaptığımız kendi aldığınız notları.
/*
//str
var str = "Atez Bootcamp"

//number data
var number = 123

//Boolean
var isTrue = true
//or
var isFalse = false

//undefined
var  sthelse

//null data
var nullData = null

//object data
var testObj = {
  sth: "atez bootcamp",
  number: 123,
  isTrue: false
}

//console.log(testObj.number)
var testArray = [
      "Atez Bootcamp",
      "Atez Bootcamp 2",
      123,
      testObj = {
        sth: "atez bootcamp",
        number: 123,
        isTrue: false
      }

]

console.log("unmutated",testObj)
testObj.sth = "Another Bootcamp"

console.log("mutated",testObj)
//BLOCK SCOPE let & const
const globalScope = "GLOBAL SCOPE VARIABLE";

function functionScope() {
  const fnScopeVariable = "FUNCTION SCOPE VARIABLE"
  //let fnScopeVariable2 = "FUNCTION SCOPE VARIABLE"
 // fnScopeVariable2 = "ANOTHER VALUE"
  Console.log("GLOBAL SCOPE",globalScope)
  Console.log("FUNCTION SCOPE", fnScopeVariable)
}

functionScope();

//array.forEach(element => {});
//for, while
//map, filter, find, foreach,slice
*/

