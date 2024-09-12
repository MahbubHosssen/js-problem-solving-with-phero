function checkDigitsInName(str){

    if(typeof str !== 'string'){
        return "Invalid Input"
    }
    result = false;
    for(let later of str){
        if(!isNaN(later)){
            result = true;
        }
    }
    return result
}
console.log(checkDigitsInName("Raj123"))
console.log(checkDigitsInName("n9ayeem"))
console.log(checkDigitsInName("e1mu3"))
console.log(checkDigitsInName("Sumon"))
console.log(checkDigitsInName("Name2024"))
console.log(checkDigitsInName("!@#"))
console.log(checkDigitsInName(["Raj546"]))