
const express = require('express');
var cors = require('cors');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        //Middlewares
        this.middlewares();
        //Rutas de la app
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());
        //Lectura y parseo del Body
        this.app.use(express.json());
        //Directorio público
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use(this.usersPath,require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto ',this.port);
        });
    }
}

module.exports = Server;