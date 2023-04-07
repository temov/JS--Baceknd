console.log('--------Homework-1 - Typescript----------')

interface Person {

    name: string,
    age: number,
    gender: "male" | "female",
}

let arrayOfPeople: Person[] = [

    { name: 'John', age: 35, gender: 'male' },
    { name: 'Petra', age: 30, gender: 'female' },
    { name: 'Kevin', age: 25, gender: 'male' },
    { name: 'Kim', age: 40, gender: 'female' }
]

function filterByProperty(people:Person[], property:string, value:string | number):Person[]{

    const foundPeople = people.filter(person=>person[property] === value);

    return foundPeople;


}

const malePeople = filterByProperty(arrayOfPeople,"gender","male");

console.log(malePeople);

const peopleWithAge30 = filterByProperty(arrayOfPeople,"age",30);

console.log(peopleWithAge30);
