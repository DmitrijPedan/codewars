function tickets(peopleInLine){
	let purse = {'25': 0, '50': 0, '100': 0};
	let hasChange = true;
	peopleInLine.forEach(el => {
			if (el === 25) {
					purse['25']++;
			} else if (el === 50 && purse['25'] > 0) {
					purse['25']--;
					purse['50']++;
			} else if (el === 100 && (purse['50'] > 0 && purse['25'] > 0)) {
					purse['25']--;
					purse['50']--;
					purse['100']++;
			} else if (el === 100 && purse['25'] > 2) {
					purse['25'] -= 3;
					purse['100']++;
			} else {
					hasChange = false;
			}
	})
	return hasChange ? "YES" : "NO";
}

// console.log(tickets([25, 25, 50, 50, 100]))