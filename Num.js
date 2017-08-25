function sum (){
  var result = 0
  for (x=0; x<arguments.length; x++ ){
      result += arguments[x];
  }
  console.log(result)
}

sum (1,2,7)
sum (5,6)
