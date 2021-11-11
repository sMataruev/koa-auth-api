'use strict';
const { productModel } = require( '../models' )
const mongoose = require( 'mongoose' )
const mongoClient = require('mongodb')
const path = require( 'path' )
const { mongo } = require( "mongoose" )


const mClient = new mongoClient.MongoClient('mongodb://localhost:27017/')

class ProductController {
//authentications
    async allProducts( ctx ) {
        // const prod = await createProd()

        const all = await  getUsers()
        const getAllProd = await productModel.find( {} )

        console.log( 'products ', getAllProd );
        console.log( 'Route -> buy' );
        ctx.body = {
            'products': getAllProd,
            'users': all
        }
    }


}

async function createProd() {
    const prod = await productModel.create([
        { title: 'Xiaomi', description: 'very might phone', imageUrl: '' },
        { title: 'OnePlus', description: 'the best phone', imageUrl: '' },
    ])
    return prod
}

async function getUsers() {
//authentications

    await mClient.connect()
    const all =   await mClient.db( 'koa-auth-db' ).collection('authentications')
    const f = all.find({})
    const ggg = await f.next()
    const gg = await f.next()

    return [gg,ggg]
}

module.exports = {
    ProductController
}
