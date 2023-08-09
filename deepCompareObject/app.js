const obj1 = {name:"arnold", age:25}
// const obj2 = {name:"arnold", age:25}
const obj2 = obj1

let obj = {isTrue:true}
function deepCompare(obj1,obj2)
{
  let store1 = Object.keys(obj1)
  let cap1 = Object.values(obj1)
  let store2 = Object.keys(obj2)
  let cap2 = Object.values(obj2)
  let incre = 0

  if( obj1 !== obj2 || store1.length !== store2.length ) return false
  
  store1.map((value) => {
      (!store2.includes(value)) ? incre++ : obj['isTrue'] = true;
    })
    
  cap1.map((value) => {
    (!cap2.includes(value)) ? incre++ : obj['isTrue'] = true;
  })
  
  return (incre > 0) ? false : obj['isTrue']
}

console.log(deepCompare(obj1,obj2))