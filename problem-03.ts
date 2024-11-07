//problem - 3
const countWordOccurrences = (sentence : string, word : string) : number =>{
    let wordCount : number = 0;
    let splitSentence : string[] = sentence.split(' ');
    let wordSentence : string;
    for (wordSentence of splitSentence){
        if(wordSentence.toLowerCase().slice(0,10) === word){
            wordCount++;
        }
    }
    return wordCount;
}
const result3 : number = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
console.log(result3);