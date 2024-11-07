//problem - 5

const getProperty = <P , N extends keyof P>(person : P, personName : N) :P[N] =>{
    return person[personName];
}

type Person = {
    name: string;
    age: number;
}
const person5 = { name: "Alice", age: 30 };
console.log(getProperty(person5, "name"));