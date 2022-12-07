const car = [
  {
    brand: "audi",
    //   [propertyToCreate]: "Mercedes",
    "license plate": "1DE45",
    color: "silver",
    year: 2012,
    accidents: false,
  },
  {
    brand: "Ford",
    //   [propertyToCreate]: "Mercedes",
    "license plate": "1DE45",
    color: "silver",
    year: 2012,
    accidents: false,
  },
];
console.log(car);

const objectKeys = Object.keys(car);
console.log(objectKeys);

const propertyToLookUpTo = objectKeys[2];
console.log(propertyToLookUpTo);

car["owners"] = 1;
car.owners = [
  {
    id: 0,
    name: "Stefano",
    annoDiAcquiszione: 2012,
  },
  { id: 1, name: "Alberto", annoDiAcquiszione: 2020 },
];
delete car.accidents;
console.log(car);

const newObject = objectKeys.slice(0, objectKeys.length - 1); //copiare l'array e eliminare l'ultimo

console.log(objectKeys);
console.log(newObject);
