const anagrams = (word, words) => words.filter(el => sort(word).match(sort(el)));
const sort = (str) => str.split('').sort((a, b) => a.localeCompare(b)).join('');


//console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
//console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
//console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))
