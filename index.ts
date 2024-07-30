// type Product = {
//     id: number;
//     name: string;
//     price: number;
//     category: string;
// }

// function isPar(num: number): boolean {
//     return num % 2 === 0;
// }

// let numero: number = 4;
// let resultado: boolean = isPar(numero);

// console.log(resultado);



// function ispositiveOrNegative(num:number): void{
//     if(num > 0){
//         console.log(num + " is a positive number.");
//     } else if(num < 0){
//         console.log(num + " is a negative number.");
//     } else {
//         console.log(num + " is zero.");
//     }
// }

// ispositiveOrNegative(9)


// let names: string[] = [
//     "Alexander",
//     "Beatrice",
//     "Cassandra",
//     "Dorian",
//     "Eleanor",
//     "Felix",
//     "Giselle",
//     "Harrison",
//     "Isabella",
//     "Julian"
// ];


// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }


// let greetings = names.map(name => `Hello, ${name}!`);
// console.log(greetings);


// const nums:number[] = [22,3,45,6,99,43,77]

//sum number

// const sumAllNumber = nums.reduce((acc,currentValue) => acc + currentValue, 0 )

// console.log(sumAllNumber);

// function concateSayHello(array:string[]):void{
//     console.log(array.join(`Hello,' '`));
// }


// concateSayHello(['Alexander', 'Beatrice', 'Cassandra']);




// type User = {
//     id: number;
//     name: string;
// };

// let users: User[] = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" },
//     { id: 4, name: "Diana" },
//     { id: 5, name: "Edward" },
//     { id: 6, name: "Fiona" },
//     { id: 7, name: "George" },
//     { id: 8, name: "Hannah" },
//     { id: 9, name: "Ian" },
//     { id: 10, name: "Jasmine" }
// ];


// function printUsers(users: User[]){
//     users.forEach(user => {
//         console.log(user.name);
//     });
    
// }


// function maxNumber(nums:number[]):number{
//     if(nums.length === 0){
//         throw new Error("Array is empty");
//     }
//     return Math.max(...nums)   
// }

// console.log(maxNumber([22,3,45,6,99,43,77]));


// Define la interfaz Car
interface Car {
    marca: string;
    model: string;
    year: number;
}

class CarUtils {
    static getCarInfo(car: Car): string {
        return `${car.marca} ${car.model} - ${car.year}`;
    }

    
}



// Crea un array de coches
let cars: Car[] = [
    { marca: "Ford", model: "Mustang", year: 2020 },
    { marca: "BMW", model: "X5", year: 2018 },
    { marca: "Toyota", model: "Camry", year: 2019 },
    { marca: "Honda", model: "Civic", year: 2021 },
    { marca: "Mercedes", model: "E-Class", year: 2017 },
    { marca: "Volkswagen", model: "Golf", year: 2022 },
    { marca: "Nissan", model: "Sentra", year: 2016 },
    { marca: "Hyundai", model: "Elantra", year: 2015 },
    { marca: "Ford", model: "Fusion", year: 2023 },
];


cars.forEach(car => {
    console.log(CarUtils.getCarInfo(car));
});


function incrementYear(car: Car): Car {
    return {
        ...car, 
        year: car.year + 1 
    };
}

console.log(cars)

