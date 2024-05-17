let internship= false;

let ourPromise = new Promise((resolve,reject) =>{
    if(internship){
        resolve("I made it");
    }
    else{
        reject("I will try harder")
    }
});

ourPromise.then((response)=>{
    console.log({response});
    console.log("Iwill continue working hard");
})
.catch((error)=>{
    console.log({error});
    console.log('I will continue applying for jobs');
})
.finally(()=>{
    console.log("I will be a Software Engineer");
});

console.log({ourPromise});

//.then() when is resolved,.catch() when rejected,.finalyy whether resolved or rejected
//in async we use try and catch (like if...else)

async function myAkiraChixDream(){
    try{
    console.log("This is my dream")
    await ourPromise;
    }
    catch{
        console.log("Our dream is not yet successful")
    }
}
myAkiraChixDream();