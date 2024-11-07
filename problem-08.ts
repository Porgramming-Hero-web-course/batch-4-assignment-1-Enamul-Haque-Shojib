//problem - 8

type Obj = {
    name: string;
    age: number;
    email: string;
}
const validateKeys = <T extends Obj>(obj: T, keys: (keyof T)[]): boolean => {

    for (const key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    
    return true;
  }
  
  
  const person8 : Obj = { name: "Alice", age: 25, email: "alice@example.com" };
  const result8 = validateKeys(person8, ["name", "age"]);

  console.log(result8);