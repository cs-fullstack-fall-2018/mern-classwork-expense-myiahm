const Info = require('../Models/InfoModel');

const bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({extend: true}));
    app.use(bodyParser.json());


    app.get("/api/:username", function (req, res) {
        Info.find({usernamee: req.params.userName}, function (err, info) {
                if (err) {
                    throw err;
                }
                {   //we got results
                    res.send();
                }
            }
        )
    });
}