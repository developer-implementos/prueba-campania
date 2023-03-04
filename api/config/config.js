const dotenv = require('dotenv');
const result = dotenv.config();

// validacion para evitar cargar todo si no esta creado el archivo .env
if (typeof process.env.AMBIENTE == "undefined") {
    console.log('Falta definir el ambiente en el archivo .env');
    console.log('renombre el archivo .env.default a .env');
    return
}

// Archivo para definir las variables de entorno que se ocuparan en todo el sitio web
if (process.env.AMBIENTE && process.env.AMBIENTE.trim() == 'pro') {
    console.log('PRODUCCION');
   // process.env.urlMongo = `mongodb://root:implenet10701@localhost/campanias`;
   process.env.urlMongo = `mongodb://localhost:27017/campanias`;
} else {
    console.log('DESARROLLO');
    process.env.urlMongo = `mongodb://localhost:27017/campanias`;
}