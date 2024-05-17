const multipy = (num)=>{
    let newArray=[]
    for(let i=0;i<num.length;i++){
        const multipyByTwo = num[i]*2;
        newArray.push(multipyByTwo);
    }
    return newArray;
}
console.log(multipy([2,3,4,5,6,7,8]));


const totalSum = (numbers)=>{
    let sum = 0;
    for(let num of numbers){
        sum+= num;
    }
    return sum;
}
console.log(totalSum([2,3,4,5]));


const students = (studentsName)=>{
    while (studentsName.length>2){
        console.log("teach Students");
        studentsName.pop();
        if(studentsName.length===2){
            console.log("You are left with two students");
        }
    }
};
students(["Ema","eve","Ann","Judith"])

const kickBall = (leg)=>{
    do{
        console.log("Kick rthe ball");
}while(leg)
};
kickBall(true)