'use strict';
const { authModel } = require( '../models' )

class AuthController {
    async signUp( ctx ) {
        const { name, password, email } = ctx.request.body

        const auth = await new authModel( {name, password, email} )
        await auth.save()
        ctx.body = {
            'register': 'Done!'
        }
    }

    async signIn( ctx ) {
        const { name, password, email } = ctx.request.body
        const candidate = await authModel.findOne( { email } )
        const user = await authModel.find( {} )
        console.log( user );
        console.log('candidate ', candidate);
        ctx.body = {
            'from-mongo': candidate
        }
    }
    async getAll(ctx) {
        const all = await authModel.find()
        console.log(all);
        ctx.body = {
            all
        }
    }


}


module.exports = {
    AuthController
}
