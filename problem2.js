function sendNotification(mail){
    if(!mail.includes("@")){
        return "Invalid Email"
    }
    let mailSplit = mail.split("@")
    let userName = mailSplit[0];
    let domain = mailSplit[1];
    return userName + " sent you an email from " + domain;
}
console.log(sendNotification("zihad@gmail.com"))
console.log(sendNotification("farhan34@yahoo.com"))
console.log(sendNotification("nadim.naem5@outlook.com"))
console.log(sendNotification("fahim234.hotmail.com"))
console.log(sendNotification("sadia8icloud.com"))