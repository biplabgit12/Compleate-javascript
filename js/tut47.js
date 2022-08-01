console.log("This is tut47");
  // Itrators in javascript
  
 function fruitsItrator(values){  //ekhane "values" bolte "myArray"
   let nextIndex = 0;  //ekhane nextIndex bolte "myArray" er index
    return {
      next :function(){
        if (nextIndex < values.length) {
            return {
                value:values[nextIndex++],
                done:false
            }
        }
      else {
           return {
            done:true
           } 
        }
      }
    }
 }

 let myArray = ["Apple","Orange","Mango","Banana"];
  console.log(myArray);
 let fruits = fruitsItrator(myArray);
  console.log(fruits.next().value);
  console.log(fruits.next().value);
  console.log(fruits.next().value);
  console.log(fruits.next().value);
  console.log(fruits.next().value);
  