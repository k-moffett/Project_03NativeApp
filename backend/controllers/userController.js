const userModel = require('../models/userModel')

const userController = {
    newUser(data){
    userModel.createUser(data)
    }
}

module.exports = userController;