function getSum (a, b) {
    return Array(Math.max(a,b) - Math.min(a,b) + 1).fill().map((_, i) => Math.min(a,b) + i).reduce((acc, val) => acc + val, 0);
}

// console.log(getSum(-5, 15));
