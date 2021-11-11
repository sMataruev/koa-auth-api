'use strict';

const Router = require( 'koa-router' )
const { authRouter } = require( './auth' )


const routes = [ authRouter ]
const r = new Router()

for ( const route of routes ) {
    r.use( route.routes() ).use( route.allowedMethods() )
}


module.exports = {
    r
}
