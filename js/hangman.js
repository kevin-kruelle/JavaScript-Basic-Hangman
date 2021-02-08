console.log('connected...')


//1. Create an array of possible words to play hangman with.

let hangmanWords = [
    'dictionary', 
    'planet', 
    'keyboard', 
    'computer', 
    'coding', 
    'javascript', 
    'markup',
    'differently'
]
//2. Determine word from array to play game with.

let randomWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
console.log(randomWord);

//3. Determine how many tries user has before user loses.

let numOfTries = randomWord.length
console.log(numOfTries);

//4. To begin game, prompt user to select a letter of the alphabet.

let guess = prompt(`Select letter you think makes up part of word. You have ${numOfTries}:`)

//5. If the letter user selected is not contained in the word selected from the array to play, give user a tally, and prompt user to guess again.



//6. If the letter is contained in the word selected, reveal letter and ask user to select another letter.



//7. If user doesn't get the word in as many tries as was determined, alert User lost!



//8.If user gets the word in under the amount of tries determined, User Won!
