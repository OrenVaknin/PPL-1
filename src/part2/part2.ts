import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels: (x:string) => number =  R.pipe(
    (x: string) => stringToArray(x),
    (x: string[]) => x.filter((char: string)=> 'IAEOUiaeou'.includes(char)),
    (x: string[]) => x.length
);

/* Question 2 */
/*const countLetter: (word:string , letter:string) => number =  R.pipe(
    //(word: string) => stringToArray(word),
   // (letter: string) => stringToArray(letter),
    //(word: string[]) => word.filter((char: string) => letter.includes(char)),
    (word: string[]) => word.filter((char: string) => char === letter),
    (word: string[]) => word.length
);
(word: string[]) =>
(word)
const countLetter: (word: string, letter: string) => number = (word, letter) => R.pipe(
    stringToArray,
    R.filter((char: string) => char === letter),
    R.length
)(word);
*/
const countLetter: (word: string, letter: string) => number = (word, letter) => R.pipe(
    stringToArray,
    R.filter((char: string) => char === letter),
    R.length
)(word);

//const getIndices = (letters:string[] ,paren:string):number[] =>

const indexArray = (arr:string[]):{char:string,id:number}[] =>
    arr.map((char,index) => ({char,id:index}));

const charFilter = (arr:({char:string,id:number})[],paren:string) : ({char:string,id:number})[] =>
    arr.filter(x => x.char === paren);

const checkClosure = (openers:({char:string,id:number})[],closers:({char:string,id:number})[]) : boolean =>
    openers.length != closers.length ? false : 
    openers.every((value,index) => value.id < closers[index].id);

const checkParen = (arr:({char:string,id:number})[]) : boolean =>
    (checkClosure(charFilter(arr,"("),charFilter(arr,(")")))) &&
    (checkClosure(charFilter(arr,"["),charFilter(arr,("]")))) &&
    (checkClosure(charFilter(arr,"{"),charFilter(arr,("}"))));
    
 


export const isPaired: (x:string) => boolean = R.pipe(
    (x:string) => stringToArray(x),
    (x:string[]) => indexArray(x),
    (arr:({char:string,id:number})[]) => checkParen(arr)
);


/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (tree:WordTree):string => 
    tree.children.length === 0 ? tree.root:
        tree.root + " " + tree.children.map(treeToSentence).join(" ");
    


