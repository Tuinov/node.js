let minimist = require('minimist');
let fs = require('fs');

let argv = minimist(process.argv.slice(2));

let path = argv._.join();  // получаем путь к файлу из аргумента

let countGame = 0; //общее количество партий
let winGame = 0; //количество выигранных
let lossGame = 0; //количество проигранных партий
let winMax = 0; //максимальное число побед подряд
let lossMax = 0; //максимальное число проигрышей подряд.

fs.access(path, (err) => {
    if (err) {
        console.error(
            `${path}  'неправильный путь!'`);
    } else {
        console.log('** СТАТИСТИКА ** ');
        console.log('общее количество партий: ', countGame);
        console.log('количество выигранных: ', winGame);
        console.log('количество проигранных партий: ', lossGame);
        console.log('максимальное число побед подряд: ', winMax);
        console.log('максимальное число проигрышей подряд: ', lossMax);
    }
});