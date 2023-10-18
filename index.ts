// Name Cases

var person_name = 'Syed Haider mehdi';
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
const newName = person_name.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log(newName);
export{};