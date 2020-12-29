const Employee= require("./Employee");

class Intern extends Employee {
     //Constructor
     constructor(name,id,email,school){
        //Call Employee Constructor
        super(name,id,email);

        this.school=school;

    }

    //Get Methods
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;