const mongodb = require("mongoose")
async function connect(){
    try {
        await mongodb.connect("mongodb://127.0.0.1:27017/Collab")
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}
connect()