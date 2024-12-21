var a=20
var b=a++
console.log(b)
b=++a // the value only changes if and only the increament value sees the variable a again
console.log(b)