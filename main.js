class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
        return this;
    }

    subtract(num) {
        this.result -= num;
        return this;
    }

    multiply(num) {
        this.result *= num;
        return this;
    }

    divide(num) {
        this.result /= num;
        return this;
    }

    getResult() {
        return this.result;
    }

}


const calc = new Calculator();
calc.add(5).subtract(2).multiply(3).divide(2);
console.log("Result: " + calc.getResult()); 

