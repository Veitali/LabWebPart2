// task3
let num = 5;

function factorial(num) {
    let fact = 1;

    for (let i=0;num-i>0;i++){
        fact*= num-i;
    }
    return fact;
}

console.log(factorial(num));