function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        return `${year} adalah tahun kabisat`;
    } else {
        return `${year} bukan tahun kabisat`;
    }
}

console.log(checkLeapYear(2024))
console.log(checkLeapYear(2021))