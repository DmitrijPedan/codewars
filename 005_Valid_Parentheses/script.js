const validParentheses = parens => {
	while (parens.indexOf('()') !== -1) {
			parens = parens.replace(/\(\)/g, '');
	}
	return parens.length === 0;
}

// console.log(validParentheses('(())((()())())'));