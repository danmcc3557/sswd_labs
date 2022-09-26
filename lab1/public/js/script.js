
function add(x, y) {
    console.log(`${x} + ${y} = ${x+y}`)
}

function checkNums(num1, num2) {
    if (num1 > num2){
        console.log(`${num1} is greater than ${num2}`);
    }else if (num2 > num1) {
        console.log(`${num2} is greater than ${num1}`);
    }else{
        console.log(`${num1} is equal to ${num2}`);
    }
}

function stringSplit(string) {
    newString = string.replaceAll(" ", ",");
    console.log(`${newString}`);
}

function getHours(minutes) {
    minutesLeftOver = minutes % 60;
    hours = Math.floor(minutes / 60);
    console.log(`${minutes} in hours and minutes: ${hours}, ${minutesLeftOver}`);
}

function circle(radius) {
    pi = Math.PI;
    area = (pi*radius**2).toFixed(2);
    circumference = (2*pi*radius).toFixed(2);
    console.log(`Radius: ${radius}\nArea: ${area}\nCircumference: ${circumference}`);
}

function distanceConvert(distance, unit) {
    if(unit == "m") {
        unit = "Kilometres";
        dist = distance*1.609344;
    }else if (unit == "km") {
        unit = "Miles";
        dist = distance*0.62137119;
    }
    console.log(`${distance} in ${unit} is ${dist}.`);
}

function calculator(x, y, op) {

    if(op =="+") {
        console.log(`${x} + ${y} = ${x+y}`)
    } else if (op == "-"){
        console.log(`${x} - ${y} = ${x-y}`)
    } else if(op == "*") {
        console.log(`${x} * ${y} = ${x*y}`)
    } else if (op == "/"){
        console.log(`${x} / ${y} = ${x/y}`)
    }
}