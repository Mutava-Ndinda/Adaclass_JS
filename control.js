function personAge(age){
    if(age >= 18){
        return "You're an adult"
    }
    else if(age >=13 && age <18){
        return "You're a teenager"
    }
    else{
        return "You're a child"
    }
};
console.log(personAge(1));

const greeting = (dayOfTheTheWeek)=>{
    switch(dayOfTheTheWeek){
        case "Monday":
        console.log("Hello Monday");
        break;
        case "Tuesday":
        console.log("Hello Tuesday");
        break;
        case "Wednesday":
        console.log("Hello Wednesday");
        break;
        case "Thursday":
        console.log("Hello Thursday");
        break;
        case "Friday":
        console.log("Hello Friday");
        break;
        case "Saturday":
        console.log("Hello Saturday");
        break;
        case "Sunday":
        console.log("Hello Sunday");
        break;
        default:
            console.log("Not the day of the week")
    }
};
greeting("Tuesday")
greeting("Elba")