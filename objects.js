const cup ={
    color:'red',
    size:'small',
    texture:'smooth',
    shape:'round',
    functionality:{
        drinkType:'tea',
        temperature:'hot'
    },
    drink: function(){
        console.log(('use me to drink'))
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`)
    }
};
console.log({color:cup.color});  
console.log('size',cup.size);
console.log({temp:cup.functionality.temperature})
console.log('texture',cup['texture'])

cup.model = 'glass';
console.log({cup});
delete cup.model;
console.log({cup});
cup.color ='green'
console.log({cup});
cup.drink()


const keys = Object.keys(cup);
console.log({keys});

const values = Object.values(cup);
console.log({values});

Object.keys(cup).forEach(element => {
    console.log({key:element, value:cup[element]})
});

const loop = Object.keys(cup).map(element => {
   return ({key:element, value:cup[element]})
});
console.log({loop})