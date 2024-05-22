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
    (word: string) => stringToArray(word),
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

export const isPaired: (x:string) => boolean = R.pipe(
    //(x: string) => stringToArray(x),
    //(x: string[]) => x.filter((char: string)=> '()[]{}'.includes(char)),
    (x: string) => countLetter(x,'(') === countLetter(x,')') && countLetter(x,'[') === countLetter(x,']') && countLetter(x,'{') === countLetter(x,'}')
    
    );


/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (tree:WordTree):string => 
    tree.children.length === 0 ? tree.root:
        tree.root + " " + tree.children.map(treeToSentence).join(" ");
    


