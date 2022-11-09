function printDigitValue(value){
    let splitValue = value.split('');

    let stringFiltered = splitValue.filter(e => !isNaN(e)).join("");

    let pattern = "";
    let arrFilteredAndDigit = splitValue.filter(e => !isNaN(e));
    for (i = 0; i < arrFilteredAndDigit.length; i++){ // baris
        for(k = 1; k < arrFilteredAndDigit.length - i; k++){ // kolom
            arrFilteredAndDigit[i] += 0
        }
        pattern += arrFilteredAndDigit[i]
        pattern += '\n'
    }
    return stringFiltered + "\n" + pattern;
}

console.log(printDigitValue("9.86-A5.321"))
console.log(printDigitValue("7s9p4,23"))