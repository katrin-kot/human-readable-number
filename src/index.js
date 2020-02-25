module.exports = function toReadable(number) {
    const read = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
        "hundred"
    ];
    function ten(number) {
        if (number % 10 === 0 && number / 10 < 10) {
            return read[20 + number / 10];
        }
        if (number % 10 != 0 && number / 10 < 10) {
            return read[20 + Math.floor(number / 10)] + " " + read[number % 10];
        }
    }
    if (number >= 0 && number <= 19 && number != 10) {
        return read[number];
    }
    if (number % 10 === 0 && number / 10 < 10) {
        return read[20 + number / 10];
    }
    if (number % 10 != 0 && number / 10 < 10) {
        return read[20 + Math.floor(number / 10)] + " " + read[number % 10];
    }

    if (number % 100 === 0 && number / 100 < 10) {
        return read[number / 100] + " " + read[30];
    }

    if (number % 100 != 0 && number / 100 < 10) {
        let hundred = read[Math.floor(number / 100)] + " " + read[30];
        if (number % 100 > 19) {
            return hundred + " " + ten(number % 100);
        } else if (number % 100 === 10) {
            return hundred + " " + read[21];
        } else {
            return hundred + " " + read[number % 100];
        }
    }
};
