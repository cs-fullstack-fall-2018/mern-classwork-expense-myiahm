const Info = require('../Models/InfoModel.js');

module.exports = function (app) {
    app.get('/api/setup', function (req, res) {
        const starterUsers = [
            {
                username: 'Banker1',
                password: "bank123",
                accountBalance: 5000
            }
        ];
        Info.create(starterInfo, function (err, results) {
            res.send(results);
        })
    })


};