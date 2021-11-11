'use strict';
const { Schema, model } = require( 'mongoose' )

const authSchema = new Schema( {
    name: {
        type: String,
        default: '',
        required: false
    },
    password: {
        type: String,
        default: 'qwerty',
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
} )


module.exports = {
    authModel: model('Auth', authSchema, 'authentications')
}

