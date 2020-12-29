const Employee = require("./Employee");

class Engineer extends Employee {

    //Constructor
    constructor(name,id,email,github){
        //Call Employee Constructor
        super(name,id,email);

        this.github=github;

    }

    //Get Methods
}

module.exports=Engineer;