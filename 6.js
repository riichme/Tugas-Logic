function findHighAndLow(arrNumber, high, low) {
	let newArrNumber = [];
	for (let i = 0; i < arrNumber.length; i++) {
		if (arrNumber[i] <= high && arrNumber[i] >= low) {
			newArrNumber.push(arrNumber[i]);
		}
	}
	return newArrNumber;
}
const high = 15,
	low = 2,
	arrNumber = [1, 4, 7, 9, 12],
	result = findHighAndLow(arrNumber, high, low);
console.log(result);