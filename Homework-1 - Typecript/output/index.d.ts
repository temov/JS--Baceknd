interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
}
declare let arrayOfPeople: Person[];
declare function filterByProperty(people: Person[], property: string, value: string): Person[];
declare const malePeople: Person[];
declare const peopleWithAge30: Person[];
