'use strict';
const Router = require( 'koa-router' )
const router = new Router({prefix: '/products'})
const { ProductController } = require( '../controllers' )
const prod = new ProductController()

router.get( '/', prod.allProducts )

module.exports = {
    productRouter: router
}
