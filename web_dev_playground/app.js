const set = new Set([1,2,2,3,4]);

console.log(set);

set.add(5);

console.log(set);

console.log(set.has(1));

console.log(set.has(7));

set.delete(2);

console.log(set);

const arr = Array.from(set);

console.log(arr);


// for(let item of set){
//     console.log(item);
// }


const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


const map = new Map();
map.set("name", "John");
map.set(1, "blue");
map.set(2, "red");

console.log(map.get("name"));
console.log(map.get(1));
console.log(map.get(2));

console.log(map.size);

console.log(map.has(1));
console.log(map.has(2));
console.log(map.has(3));

map.delete(1);
console.log(map);