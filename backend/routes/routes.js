const userController = require('../controllers/userController')

module.exports = (app) => {

    app.get('/', (req, res) => {
        console.log('Got Root')
        res.send({item: 'Got some shit yo!'});
    });
    app.post('/signUp', (req, res) => {
        userController.newUser(req.body);
        res.send('Got the request');
    });

}