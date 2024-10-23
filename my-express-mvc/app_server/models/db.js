let mongoose = require("mongoose");
let dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2"

mongoose.connect(dbURI, {
   // useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error : " + error);
});

mongoose.connection.on("diconnected", () => {
    console.log("Disconnected from MongoDB");
});