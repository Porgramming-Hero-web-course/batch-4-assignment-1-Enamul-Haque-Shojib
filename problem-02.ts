//problem - 2
const removeDuplicates = (numberOfArray:number[]) : number[] =>{
    let num : number;
    let newArrayNumber : number[] = [];
    
    for (num  of numberOfArray){
        if(!newArrayNumber.includes(num)){
            newArrayNumber.push(num);
        }
    }
    return newArrayNumber;
}

const result2 : number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result2);