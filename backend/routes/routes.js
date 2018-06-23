module.exports = (app) => {

    app.get('/', function(req, res) {
        res.send('Got some shit!');
    });

}