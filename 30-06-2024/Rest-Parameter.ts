function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
    return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string =
    function (firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }



function getAverage(...args: number[]) {
    var avg = args.reduce(function (a, b) {
        return a + b;
    }, 0) / args.length;

    return avg;
}

// Function call 
console.log("Average of the given numbers is : " +
    getAverage(10, 20, 30, 40, 50));
console.log("Average of the given numbers is : " +
    getAverage(1.5, 3.5, 5.5, 7.5, 9.5));
console.log("Average of the given numbers is : " +
    getAverage(2, 4, 6));















function printName(firstName: string, lastName: string) {
    console.log(firstName + " " + lastName)
}

printName("Ahmed", "Owais");
printName("Imran", "Ahmed")

// ...infiniteNaming:









function buildName2(
    firstName: string,
    ...restOfName: string[]
) {
    return firstName + " " + restOfName.join(" ");
}


