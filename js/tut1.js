console.time("this is table method.")
console.log("this is console.log session.")
console.log(23+2);
console.log(true);
console.log(["biplab","pritam","subrato"]);
console.log({name:"Biplab",
            roll:53,
            learn:"javascript"
});

console.table({name:"Biplab",
roll:53,
learn:"javascript"
})

console.warn("This is a warning.");
// console.clear();

console.timeEnd("your code took");

console.assert(5<2, "this is assert method");

console.time();
for (let i = 0; i < 500; i++) {
 console.log(i);
}
console.timeEnd();

console.error("this is my error line");


for (let i = 0; i < 222; i++) {
  console.count(i)    
}

console.group("simple")
console.log("grouped");
console.log("grouped");
console.log("grouped");
console.log("grouped");
console.groupEnd("simple");

const spacing ="8px";
 const myStyle = `padding:${spacing}; font-size:12px; color:red;`;

 console.log("%cBIPLAB",myStyle);


 