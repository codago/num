function sum(arguments){
            var total =  0;
            for(var i=0;i<arguments.length;i++)
              {
                if(isNaN(arguments[i])){
                break;
                 }
                  total += Number(arguments[i]);
               }
             return total;
            }
console.log(sum([1,2,7]));
console.log(sum([5,6]));
