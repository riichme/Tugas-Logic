function swapInteger(a,b){
    // Menggunakan destructuring assignment
    [a,b] = [b,a]
    return `a = ${a} dan b = ${b}`
}

console.log(swapInteger(5, 10));