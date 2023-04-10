console.log('--------Homework-1 - Typescript----------');
var arrayOfPeople = [
    { name: 'John', age: 35, gender: 'male' },
    { name: 'Petra', age: 30, gender: 'female' },
    { name: 'Kevin', age: 25, gender: 'male' },
    { name: 'Kim', age: 40, gender: 'female' }
];
function filterByProperty(people, property, value) {
    var foundPeople = people.filter(function (person) { return person[property] === value; });
    return foundPeople;
}
var malePeople = filterByProperty(arrayOfPeople, "gender", "male");
console.log(malePeople);
var peopleWithAge30 = filterByProperty(arrayOfPeople, "age", "30");
console.log(peopleWithAge30);
