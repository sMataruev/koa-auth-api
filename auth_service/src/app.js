const Koa = require( 'koa' )
const koaBody = require( 'koa-body' )
const cors = require( '@koa/cors' )
const helmet = require( 'koa-helmet' )
const compress = require( 'koa-compress' )
const mongoose = require( 'mongoose' )
require( 'dotenv' ).config()

const app = new Koa()
const { r } = require( './routes' )


app.use( koaBody( { json: true, urlencoded: true } ) )
app.use( cors() )
app.use( helmet() )
app.use( compress() )
app.use( r.routes() ).use( r.allowedMethods() )

const PORT = process.env.SERVER_PORT
const HOST = process.env.SERVER_HOST
const MONGO = process.env.MONGO_URL

const mongoCon = () => {
    const options = {
        useUnifiedTopology: true
    }
    mongoose.connect( MONGO, options );
    console.log( `Mongo started ... ${MONGO}` );
    return mongoose.connection
}

const server = () => {
    console.log( `Auth service works on PORT ${ PORT }` );
    console.log( `Auth host works on PORT ${ HOST }` );
    console.log( `Auth db  ${ MONGO }` );
    app.listen( PORT )
}
mongoCon()
    .on( 'error', console.log )
    .on( 'disconnected', mongoCon )
    .on( 'open', server )


