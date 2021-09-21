const express = require('express');
const router = express.Router();
var { graphqlHTTP } = require('express-graphql');
const prductos = require('../api/productos');
const schema = require('../modeloMongoLocal/productoGraph').schema
var app = express();
router.get('/productos/listar', async (req, res) => {
    let prodRes = await prductos.buscar();
    res.json(prodRes);
    
});
router.get('/productos/listar/:id', async (req, res) => {
    let { id } = req.params;
    let prodRes = await prductos.buscarPorId(id);
    res.json(prodRes);
    
});



router.post('/productos/guardar' ,async  (req, res) => {
    console.log('llego algoaca ?')
    let producto = req.body;
    let prodRes = await prductos.guardar(producto);
    console.log(prodRes)
    res.json(prodRes);
});

router.put('/productos/actualizar/:id' , async (req, res) => {
    let { id } = req.params
    let producto = req.body
    let prodRes = await prductos.update(id, producto)
    res.json(prodRes);
});

router.delete('/productos/borrar/:id', async  (req, res) => {
    let { id } = req.params;
    let producto = req.body
    let productoAct = await prductos.eliminar(id)
    
    res.json(productoAct);
});

const buscar = async function () {
    return await prductos.buscar()
}
const actualizar = async function (prod) {
    console.log(JSON.stringify(prod))
    return await prductos.update(prod.id, prod)
}
var root = {
    buscar: buscar,
    updateProducto: actualizar,
};

router.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}))

module.exports = router;