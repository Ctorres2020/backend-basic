const express = require('express')
const cors = require('cors');
const { use } = require('express/lib/application');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        //MIDDLEWARES
        this.middlewares();

        //rutas de la app
        this.routes();
    }

    middlewares() {

        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //directorio public
        this.app.use( express.static('public') );
    }



    routes(){
        this.app.use('/api/usuarios', require('../routes/user'))
    }

    listen(){

        this.app.listen(this.port, ()=> {
            console.log('servidor corriendo puerto', this.port);
        })
    }

}

module.exports = Server;