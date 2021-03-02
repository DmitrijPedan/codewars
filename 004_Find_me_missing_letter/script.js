function findMissingLetter(array) {
    const codes = array.map(el => el.charCodeAt(0));
    return String.fromCharCode(codes.find((el, i) => codes[i + 1] - el > 1) + 1);
}

// console.log(findMissingLetter((["a","b","c","d","f"])));