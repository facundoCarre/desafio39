const request = require('supertest')('http://localhost:8080')
const expect = require('chai').expect

describe('test api rest full', () => {
    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            let response = await request.get('/api/productos/listar')
            expect(response.body[0]).to.have.property('nombre')
            expect(response.body[0]).to.have.property('precio')
            expect(response.body[0]).to.have.property('stock')
            expect(response.status).to.eql(200)
        })
    })
    describe('POST', () => {
        it('debería incorporar un producto', async () => {
             let producto = {
                nombre: 'Pepe',
                precio: 222,
                stock: 222
            } 

            let response = await request.post('/api/productos/guardar').send(producto)
            expect(response.body).to.have.property('nombre')
            expect(response.body).to.have.property('precio')
            expect(response.body).to.have.property('stock')
            expect(response.status).to.eql(200)
        })
    })
    describe('PUT', () => {
        it('debería incorporar un producto', async () => {
             let producto = {
                nombre: 'cambio',
                precio: 5555,
                stock: 5555
            } 

            let response = await request.put('/api/productos/actualizar/6147d476213e91162cc0ea11').send(producto)
            //console.log(response.status)
            expect(response.body).to.have.property('nombre')
            expect(response.body).to.have.property('precio')
            expect(response.body).to.have.property('stock')
            expect(response.status).to.eql(200)
        })
    })
    describe('DELETE', () => {
        it('debería eliminar un producto', async () => {

            let response = await request.delete('/api/productos/borrar/6147dace2dd2040a68cd6fc7')
            console.log(response.body)
            if(response.body){
                expect(response.body).to.have.property('nombre')
                expect(response.body).to.have.property('precio')
                expect(response.body).to.have.property('stock')
                expect(response.status).to.eql(200)
                
            }else{
                expect(response.status).to.eql(200)
            }

        })
    })
})
