

const person = {
    name: "Rajib",
    testScore: 50,
    schoolGrade: 30,
    isFFamily: false
}
const person2 = {
    name: "mahbub",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false
}

function calculateFinalScore(obj){
    // console.log(obj)
    if(typeof obj !== 'object' || Array.isArray(obj) === true){
        return "Invalid Input";
    }

    let score = obj.testScore + obj.schoolGrade;
    result = false;
    if(score >= 80){
        result = true
    }
    else if(obj.isFFamily){
        score += 20;
        result = score >= 80 ? true : false;
    }
    return result;
}

console.log(calculateFinalScore("person"))