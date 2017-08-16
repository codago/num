function sum () {
var output = 0
for (n = 0; n < arguments.length; n++) {
output += arguments[n];
}
console.log(output)
}

sum (1, 2, 7)
