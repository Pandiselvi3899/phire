const mongoose = require("mongoose");
const  MONGOURI  = "mongodb+srv://selvi:1234@cluster0.gpmh3k7.mongodb.net/enquiry"

mongoose.set('strictQuery', false);



const connectDB = async () => {
    try {

        mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('MongoDB Connection successful!');
        }).catch((e) => {
            console.log('Connection failed!',e);
        })

    } catch (error) {
        console.log(error)

    }
}

module.exports = connectDB