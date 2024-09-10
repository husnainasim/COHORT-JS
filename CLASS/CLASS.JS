class Animal{
    constructor(name,legcount,speaks){
        this.name = name;
        this.legcount = legcount;
        this.speaks =speaks;
    }
    // static is a method / function that is associated with the class only not with the objects of the class 

static myType(){

    console.log("Animal");

}
    speak(){

        console.log("Hi there! I am a "+this.name+" & I speak "+ this.speaks);

    }


}

let dog=new Animal("dog",4,"Bhow Bhow");
let cat=new Animal("cat",4,"meow meow");

cat.speak();
Animal.myType();
//! cat.myType();// This gives an error 


