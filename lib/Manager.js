const Employee= require("./Employee");

class Manager extends Employee {
     //Constructor
     constructor(name,id,email,officeNumber){
        //Call Employee Constructor
        super(name,id,email);

        this.officeNumber=officeNumber;

    }

    //Get Methods
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;