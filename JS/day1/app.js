// Assignment 1

let fruits = ["apple", "banana", "orange"];

// console.log(fruits);

fruits.shift();

// console.log(fruits);

fruits.push("grape");

// console.log(fruits);

fruits.splice(1,1,"pear");

console.log(fruits);

// Assignment 2

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// console.log(person);

delete person.age;

// console.log(person);
person.job = "Engineer";
person.city= "San Francisco";

console.log(person);

// Assignment 3

let cars = [
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Tata", model: "Nexon", year: 2021 },
    { make: "hyundai", model: "Exter", year: 2023 }
];

cars.shift();
// console.log(cars);

cars.push({ make: "Honda", model: "Civic", year: 2020 });
// console.log(cars);
  
cars[1].model = "Accord";

console.log(cars);


