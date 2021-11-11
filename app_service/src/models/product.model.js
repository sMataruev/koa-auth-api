'use strict';
const { Schema, model } = require( 'mongoose' )


const ProductSchema = new Schema( {
    title: {
        type: String,

    },
    description: {
        type: String,

    },
    imageUrl: {
        type: String,
        default: ''
    }
} )


module.exports = {
    productModel: model( 'ProductModel', ProductSchema, 'products' )
}
