function FizzBuzz(num) {
    for (var i=1; i <= num; i++) {
        if (i % 15 == 0)
            console.log("eduwork");
        else if (i % 3 == 0)
            console.log("edu");
        else if (i % 5 == 0)
            console.log("work");
        else
            console.log(i);
    }
    return
}

console.log(FizzBuzz(15))