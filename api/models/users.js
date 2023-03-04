const { dbImplenet } = require('../config/db');
const Schema = dbImplenet.Schema;

const userSchema = new Schema({
    usuario:{
        type:String, required:true
    },
    nombre:{
        type:String, required:true
    }

},{timestamps:true});

module.exports = dbImplenet.model('clientes',userSchema,'clientes');