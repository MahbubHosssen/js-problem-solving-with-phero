function waitingTime(arr, serialNum){
    if(!Array.isArray(arr) || typeof serialNum !== 'number'){
        return "Invalid Input"
    }
    let avg = 0;
    for(let item of arr){
        avg += Math.round(item / arr.length)
    }
    const withoutSelfNumber = serialNum - 1;
    const remaining = withoutSelfNumber - arr.length
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