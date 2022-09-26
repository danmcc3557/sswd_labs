
function add(x, y) {
    console.log(`${x} + ${y} = ${x+y}`)
}

function CheckNums(num1, num2) {
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
