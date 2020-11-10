const chalk = require('chalk');

myStyleError = chalk.bold.red;
myStyleHex = chalk.hex ( '#00FF00' );

console.log (myStyleError ( 'Это мой стиль текста для ошибок' ));

const error = myStyleError;
const warning = chalk.keyword('orange');

console.log(error('Ошибка!'));
console.log(warning('Предупреждение!'));
console.log(myStyleHex('Свой цвет'));