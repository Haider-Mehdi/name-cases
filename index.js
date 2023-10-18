"use strict";
// Name Cases
Object.defineProperty(exports, "__esModule", { value: true });
var person_name = 'Syed Haider mehdi';
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
const newName = person_name.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log(newName);
