const axios = require('axios');

const URL = 'http://localhost:8080'

async function nuevoProducto() {
    try {
        axios.post(URL + '/api/productos/guardar', { nombre: 'perro',precio:15, stock:5, "permisos": {
            "administrador": true,
            "usuario": true
        },})
        .then(response => {
            console.log(response.data);
        })
        .catch(console.log);
    
    } catch (error) {
        console.error(error.response);
    }
};

async function listarProductos() {
    try {
        let response = await axios.get(URL + '/api/productos/listar');
        console.log(response.data)
    } catch (error) {
        console.error(error.response);
    }
};

async function borrarProducto() {
    try {
        axios.delete(URL + '/api/productos/borrar/6147d36537ea3b1cdcd16c98', { permisos: {
            administrador: true,
            usuario: true
        },})
        .then(response => {
            console.log(response.data);
        })
        .catch(console.log);
    } catch (error) {
        console.error(error.response);
    }
};
async function modificarProducto() {
    try {
        axios.put(URL + '/api/productos/actualizar/6147dace2dd2040a68cd6fc7', { nombre: 'hakunamatata',precio:2225, stock:5222})
        .then(response => {
            console.log(response.data);
        })
        .catch(console.log);
    
    } catch (error) {
        console.error(error.response);
    }
};

nuevoProducto();
listarProductos();
borrarProducto();
modificarProducto();