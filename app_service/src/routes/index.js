'use strict';

const Router = require( 'koa-router' )

const { productRouter } = require( './product' )



const routes = [ productRouter]
const r = new Router()

for ( const route of routes ) {
    r.use( route.routes() ).use( route.allowedMethods() )
}


module.exports = {
    r
}
