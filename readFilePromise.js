let fs = require('fs');
let util = require('util');

const  readFilePromise = util.promisify(fs.readFile);

let data;

readFilePromise('package.json', 'utf8')
    .then((fdata) => {
        data = fdata;
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

const { Console} = require('console');

const logger = new Console(fs.createWriteStream('log.txt'), fs.createWriteStream('error.txt'));

logger.log('info');
logger.error('error');