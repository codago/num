function sum(){
  var result = 0//hasil
  for (var i = 0; i < arguments.length; i++) {
   result = result+arguments[i];
  }
  console.log(result)
}
sum(1,2,7)
sum(5,6)
