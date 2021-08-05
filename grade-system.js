function grade(number) {
    if (number >= 80 && number <= 100) {
        return 'A+';
    }
    else if (number >= 70 && number <= 79) {
        return 'A';
    }
    else if (number >= 60 && number <= 69) {
        return 'A-';
    }
    else if (number >= 50 && number <= 59) {
        return 'B';
    }
    else if (number >= 40 && number <= 49) {
        return 'D';
    }
    else {
        return 'fail';
    }

}
const result = grade(99);
console.log(result);