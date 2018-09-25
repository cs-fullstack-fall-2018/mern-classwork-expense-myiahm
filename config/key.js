// Hold methods for fetching cfg values

const configValues = require('./config.json');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://'+ configValues.uname + ':' + configValues.pword + '@ds113853.mlab.com:13853/bankcreds';

    }


};
