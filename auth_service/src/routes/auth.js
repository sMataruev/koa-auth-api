'use strict';

const Router = require( 'koa-router' )
const router = new Router({prefix: '/auth'})  /*  .prefix('/auth') */
const { AuthController } = require( '../controllers' )
const auth = new AuthController()

router.post( '/sign-up', auth.signUp )
router.post( '/sign-in', auth.signIn )
router.get( '/get-all', auth.getAll )


module.exports = {
    authRouter: router
}
