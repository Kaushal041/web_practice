// document.write("Welcome Students<br>");
// let x=10;
// let y=5;
// let  Addition = x+y;
// let  Substraction = x-y;
// let  Mutiplication =x*y;
// let Division = x/y;
// let Reminder = x%y;
// let isEqual = x==y;
// let isNotEqual = x!=y;
// let isGrater = x>y;
// let logical = (x>y)&&(y<10);
// console.log(`${Addition}\n${Substraction}\n${Mutiplication}\n${Division}\n${Reminder}\n${isEqual}\n${isNotEqual}\n${isGrater}\n${logical}\n$`,"Hello Learner")
// const x1= 120;
// {
//     var y1=1234;
// }
// console.log(x1,y1);
// let fname = "kaushal";
// document.write("ram");


//Function Expresstion
// let day = function(){
    //     document.write("Have a nice day<br><br>")
    // }
    // day()
    // day()
    
    // Arrow function
    // let msg =()=>{
        //     document.write("Happy Birthday India<br><br>")
        // }
        // msg()
    // msg()
    
    //iife function
    // (function(){
        //     document.write("iife function")
        // }())

//Simple function
// function greeting(){
//     document.getElementById("demo").innerHTML = "Have a good day"
//     document.getElementById("demo").innerHTML = "Have a good day"
//     document.getElementById("demo").innerHTML = "Have a good day"
//     document.getElementById("demo").
// }
// greeting()
// greeting()

// function morning(){
//     document.getElementById("demo").innerHTML="Good Morning"
//     document.getElementById("mode").style.background = "skyblue"
//     document.getElementById("mode").style.color = "yellow"
// }
// function afternoon(){
//     document.getElementById("demo").innerHTML="Good Afternoon"
//     document.getElementById("mode").style.background = "white"
//     document.getElementById("mode").style.color = "grey"
// }
// function evening(){
//     document.getElementById("demo").innerHTML="Good Evening"
//     document.getElementById("mode").style.background = "grey"
//     document.getElementById("mode").style.color = "yellow"
// }
// function night(){
//     document.getElementById("demo").innerHTML="Good Morning"
//     document.getElementById("mode").style.background = "black"
//     document.getElementById("mode").style.color = "white"
// }

// function calculator(){
//     let num1 = parseFloat(document.getElementById("num1").value)
//     let num2 = parseFloat(document.getElementById("num2").value)
//     let operator = document.getElementById("operator").value
//     let result
//     if(operator === "add"){
//         result = num1+num2
//     }
//     else if(operator === "subtract"){
//         result = num1-num2
//     }
//     else if(operator === "multiply"){
//         result = num1*num2
//     }
//     else if(operator === "divide"){
//         result = num1/num2
//     }
//     document.getElementById("result").innerHTML = "Result:" + (`${result}`)
// }

let Student = {
    id:101,
    sname:"RAM",
    isStudent:true,
}

let {id,sname,isStudent} = Student
console.log(id)
console.log(sname)
console.log(isStudent)

// let {id:_id,sname:name,isStudent:ist} = Student
// console.log(_id)
// console.log(name)
// console.log(ist)

console.log(Student['id']);
 Student.id = 102
console.log(Student['id'])

Student['age']=22
console.log(Student)

Student.isStudent=false
console.log(Student)

delete Student
console.log(Student)