const XO = (str) => (str.toUpperCase().split('O').length - 1) === (str.toUpperCase().split('X').length - 1);

// console.log(XO("xooxx"))