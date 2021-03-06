module.exports = require('yargs')
    .option('assertion-timeout', {
        default: 3000,
        describe: 'Amount of time (milliseconds), within which TestCafe makes attempts to successfully execute an assertion if a selector property or a client function was passed as an actual value',
        type: 'integer'
    })
    .option('browsers', {
        alias: 'b',
        default: ['chrome:headless'],
        describe: 'List of browsers to test in with testcafe',
        type: 'array'
    })
    .option('fixture', {
        alias: 'f',
        default: null,
        describe: 'Run test with the specified fixture',
        type: 'string'
    })
    .option('ports', {
        alias: 'p',
        default: [1337, 1338],
        describe: 'Ports that will be used to serve tested webpages',
        type: 'array'
    })
    .option('screenshots', {
        default: null,
        describe: 'Path leading to the directory where to save screenshots',
        type: 'string'
    })
    .option('screenshotsOnFail', {
        alias: 'S',
        default: true,
        describe: 'Take screenshots whenever test fails',
        type: 'boolean'
    })
    .option('selector-timeout', {
        default: 10000,
        describe: 'Amount of time (milliseconds), within which selectors make attempts to obtain a node to be returned',
        type: 'integer'
    })
    .option('specs', {
        alias: 's',
        default: './Specs/Features/**/*.feature',
        describe: 'Path(s) or Pattern(s) leading to your specification files',
        type: 'array'
    })
    .option('steps', {
        alias: 'd',
        default: './Specs/Definitions/**/*.js',
        describe: 'Path(s) or Pattern(s) leading to your step definition files',
        type: 'array'
    })
    .option('test', {
        alias: 't',
        default: null,
        describe: 'Run test with the specified name',
        type: 'string'
    });
