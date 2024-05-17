function greet(username,callback){
    console.log(`Hello there ${username}`);

    callback();
};

function intro(){
    console.log(`This is me`);
};
greet('Hellen',intro);

setTimeout(intro, 2000);

setInterval(function(){
    console.log('This is my interval')
},3000);
