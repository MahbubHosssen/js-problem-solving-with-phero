function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }

    return (tax = (income - expenses) * 0.2);
}
console.log(calculateTax(10000, 3000))
console.log(calculateTax(34000, 1753))
console.log(calculateTax(5000, 1500))
console.log(calculateTax(7000, 7000))
console.log(calculateTax(-5000, 2000))
console.log(calculateTax(6000, -1500))

function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email";
    }

    let mailSplit = email.split("@");

    let userName = mailSplit[0];

    let domain = mailSplit[1];

    return userName + " sent you an email from " + domain;
}
console.log(sendNotification("zihad@gmail.com"))
console.log(sendNotification("farhan34@yahoo.com"))
console.log(sendNotification("nadim.naem5@outlook.com"))
console.log(sendNotification("fahim234.hotmail.com"))
console.log(sendNotification("sadia8icloud.com"))

function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }

    result = false;

    for (let later of name) {
        if (!isNaN(later)) {
            result = true;
        }
    }

    return result;
}
    console.log(checkDigitsInName("Raj123"))
console.log(checkDigitsInName("n9ayeem"))
console.log(checkDigitsInName("e1mu3"))
console.log(checkDigitsInName("Sumon"))
console.log(checkDigitsInName("Name2024"))
console.log(checkDigitsInName("!@#"))
console.log(checkDigitsInName(["Raj546"]))

function calculateFinalScore(obj) {
    if (typeof obj !== "object" || Array.isArray(obj) === true) {
        return "Invalid Input";
    }

    let score = obj.testScore + obj.schoolGrade;

    result = false;

    if (score >= 80) {
        result = true;
    } else if (obj.isFFamily) {
        score += 20;

        result = score >= 80 ? true : false;
    }

    return result;
}
const person = {
    name: "Rajib",
    testScore: 30,
    schoolGrade: 30,
    isFFamily: true
}
console.log(calculateFinalScore(person))

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    let avg = 0;

    for (let item of waitingTimes) {
        avg += Math.round(item / waitingTimes.length);
    }

    const withoutSelfNumber = serialNumber - 1;

    const remaining = withoutSelfNumber - waitingTimes.length;

    const takeTime = remaining * avg;

    return takeTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
