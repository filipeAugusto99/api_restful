const router = require('express').Router()
const ProductController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS)
// GET - OBTER DADOS
// POST - ENVIAR / RECEBER DADOS
// PUT - ATUALIZAR DADOS
// DELETE - REMOVER DADOS

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

module.exports = router

//se passar o id = obtem um produto especifico
//se passsar sem o id = obtem tudo