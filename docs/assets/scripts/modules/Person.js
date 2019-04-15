function Person(fullName,favColor){
    this.name=fullName;
    this.favoriteColor=favColor;
    this.greet=function(){
        console.log("My name is "+this.name+" and my favorite Color is "+this.favColor);
    }

}
module.exports=Person;