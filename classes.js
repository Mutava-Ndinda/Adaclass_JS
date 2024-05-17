class Person{
    constructor(name,age){

        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}
const adam = new Person('Adam',30);
console.log({adam});
adam.greet();

class Student extends Person{
    constructor(name, age,school){
        super(name,age)
        this.school = school
    }
    profession(){
        console.log(`1 am a student at ${this.school}`)
    }
};
const student = new Student('Faith',21,'AkiraChix');
console.log({student});
student.profession();


class Recipes{
    constructor(){
        this.listOfRecipes=[]
    }
    addRecipe(name,ingredients,steps){
        let id= this.listOfRecipes.length +1
        let newRecipe= {
            name:name,
            id:id,
            ingredients:ingredients,
            steps:steps
                        }
    this.listOfRecipes.push(newRecipe)
    console.log('The recipe has been added')
    }
    searchRecipe(name){
        const recipes= this.listOfRecipes.filter(recipe=>
            recipe.name.tolowercase().includes(name.tolowercase)
            )
            console.log(recipes)
    }
}
addRecipe(Gimbap,[fish,ricepaper,soju])
searchRecipe(rice)