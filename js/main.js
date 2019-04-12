// console.log("object.js");

// const cupcake = {
//     color: ["pink", "white", "brown"],
//     flavor: "chocolate",
//     size: "mini",
//     calories:  0,
//     icing: true,
//     eatCupcake: () => {
//         console.log("yum");
//     }
// }

// console.log("cupcake", cupcake);

// cupcake.eatCupcake();

// console.log("what is the color", cupcake.color);

// for (let i = 0; i < cupcake.color.length; i++) {
//     console.log("cupcake colors",  cupcake.color[i]);
// }

// cupcake.color.forEach(color => {
//     console.log("What is color", color);
//     console.log(`the color again is ${color}`);
// })

// const car = {
//     color: "red",
//     year: 2015,
//     make: "Ford",
//     model: "Mustang",
// }
// console.log(car);

// const shelterAnimals= ["Kipper", "Jack", "Gypsy", "Angus", "Seymour", "Sharky"];
// console.log(shelterAnimals);

let familyMembers = {
    name: [],
    genderMale: [],
    legs: []
} 

//Over rides the array, does not push to it
// familyMembers.name = ["Corey", "Shelley", "Cavy", "Cerin"];
// familyMembers.genderMale = [true, false, true, true];
// familyMembers.legs = [2, 2, 4, 4];

//Pushed infomation to an empy array. Repeate for other keys
familyMembers.name.push("Corey");
familyMembers.name.push("Shelley");
familyMembers.name.push("Cavy");
familyMembers.name.push("Cerin");


for(const key in familyMembers) {
    console.log(key + ": " + familyMembers[key])
}

// Instructor Example
const myFamily = [
    {
        name: "John",
        age: 5
    },
    {
        name: "Bell",
        age: 10
    }
];
console.log(myFamily);

