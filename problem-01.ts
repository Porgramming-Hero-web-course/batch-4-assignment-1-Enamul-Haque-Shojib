//problem - 1
const sumArray =(arrayOfNumber:number[]) : number=>{
    let sum : number = 0;
    let num : number;
    for (num of arrayOfNumber){
        sum = sum + num;
    }
    return sum;
}

const result1: number = sumArray([1, 2, 3, 4, 5]);
console.log(result1);