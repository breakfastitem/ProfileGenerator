const Employee = require("./Employee");

class Engineer extends Employee {

    //Constructor
    constructor(name,id,email,github){
        //Call Employee Constructor
        super(name,id,email);

        this.github=github;

    }

    //Get Methods
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports=Engineer;