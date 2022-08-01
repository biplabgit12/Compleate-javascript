 
 console.time('Your code Took');
console.log('hello how are you');
 console.log(23+2);
 console.log(true);
 console.log([23,54,67,78]);
 console.log({name:'biplab',
      roll:53,
      school:'bhebia'
});

console.table({name:'biplab',
    roll:53,
    school:'bhebia'}
);

console.warn('this is my warning');
// console.clear();

console.timeEnd('Your code Took');
console.assert(566<189, 'Age <189 is not possible');

console.error('this is an error');


const spacing = '12px'; 
const mystyle =  
`padding: ${spacing}; background-color: white; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 3em;`; 
console.log('%cCode With Biplab', mystyle);


console.time();
for (i = 0; i <100; i++) {
  // code
}
console.timeEnd();


for (i = 0; i<4; i++) {
    console.count(i);
  }

  console.log(null); 

  