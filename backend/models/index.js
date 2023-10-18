const mongoose = require("mongoose");
const uri = "mongodb+srv://raphaelbiagtan25:meine_liebe_22@cluster0.xxyk75h.mongodb.net/?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };

//vnK7P4JqGHYLPLDG