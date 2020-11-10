var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin, // ввод из стандартного потока
    output: process.stdout // вывод в стандартный поток
});

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let coin = getRandomInRange(1, 2);

rl.on('line', function (cmd) {
    if(cmd == coin) {
        console.log('Ты угадал!!');
    } else {
        console.log('Ты не угадал. Правильный ответ: '+coin);
    }

});

rl.question('Выбери: Орёл(введи 1), Решка(введи 2)', function(answer) {
    if(+answer === coin) {
        console.log('Ты выиграл!!');
    } else {
        console.log('Ты проиграл. Правильный ответ: '+coin);
        rl.close();
    }
});
