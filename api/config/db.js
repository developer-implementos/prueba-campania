require("./config");
const Mongoose = require("mongoose").Mongoose;

const dbImplenet = new Mongoose();

dbImplenet
    .connect(process.env.urlMongo, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        autoReconnect: true,
        reconnectTries: 10000,
        reconnectInterval: 1000,
    })
    .then((resp) => {
        console.log("--------------------------------");
        console.log("CONEXION A MONGO IMP ESTABLECIDA ");
    });




module.exports = { dbImplenet };