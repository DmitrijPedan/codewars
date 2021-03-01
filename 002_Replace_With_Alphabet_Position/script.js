function alphabetPosition(text) {
    let firstLetterOffset = 'a'.charCodeAt(0) - 1;
    let clearString = text.replace(/[^A-Z]/gi, '').toLowerCase();
    return clearString.split('').map(letter => letter = letter.charCodeAt(0) - firstLetterOffset).join(' ');
}

//refactor
const alphabetPosition2 = (text) => text.replace(/[^A-Z]/gi, '').toLowerCase().split('').map(letter => letter = letter.charCodeAt(0) - ('a'.charCodeAt(0) - 1) ).join(' ');

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));