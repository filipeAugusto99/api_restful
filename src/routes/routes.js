const router = require('express').Router()
const ProductController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS)
// GET - OBTER DADOS
// POST - ENVIAR / RECEBER DADOS
// PUT - ATUALIZAR DADOS
// DELETE - REMOVER DADOS

router.get('/products/:id?', ProductController.get)
//router.get('/products', ProductController.post)
//router.get('/products/:id', ProductController.put)
//router.get('/products/:id', ProductController.delete)

module.exports = router

//se passar o id = obtem um produto especifico
//se passsar sem o id = obtem tudo