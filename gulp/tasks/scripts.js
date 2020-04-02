const webpack = require("webpack");

exports.scripts = (done) => {
    webpack(require('../../webpack.config.js'), (err, stats) => {
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        done();
    });
}

