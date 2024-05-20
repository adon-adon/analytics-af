const { merge } = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    testUrl: '"888b.xkiosx.xyz"'
});
