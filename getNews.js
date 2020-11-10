var request = require('request');
var cheerio = require('cheerio');
request('http://rbc.ru/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        // console.log(html)
        var $ = cheerio.load(html);
        $('.main__feed__title').each(function(i, element){
            console.log($(this).text());
        });
    } else {
        console.log(error, response.statusCode);
    }
});