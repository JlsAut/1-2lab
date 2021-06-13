"use strict";
window.onload = ButtonStart;

function ButtonStart(){
let button = document.querySelector('button');
button.onclick = Equality;
}
function Equality(){
let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
a = +a.value;
b = +b.value;
c = +c.value;
let x1,x2;
if (a == 0){
alert("Введено неверное значение для a");
}
else{
let D = b*b- 4*a*c;
if (D>0){
x1 = (-b + Math.sqrt(D))/ (2*a);
x2 = (-b - Math.sqrt(D))/ (2*a);
alert(`Значение переменной x1 = ${x1},
Значение переменной x2 = ${x2}`);
}
else if (D==0){
x1 = -b /2*a;
alert(`Значение переменной x1, x2 = ${x1},`);
}
else{
alert('Действительных корней не существует');
}
}
}