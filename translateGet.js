let word = $_GET('word'); //получаем слово из get запроса
//let word = 'word';

const IAM_TOKEN = 't1.9f7L7euelZrKiorOy4uQzsrLl4nPkcqZjeX0915GVgL67x8FEMbd9PcedVMC-u8fBRDG.1gh-S_v6d-MMK_f32_PpRJyqV-XQW9jnBW2LhNRLRCZprEbDj0SUuXw1xNZdO70rFLmlxpIsAmP4xWDBj7g_AQ';

const FOLDER = 'b1gd129pp9ha0vnvf5g7';

axios = require('axios');

axios.post("https://translate.api.cloud.yandex.net/translate/v2/translate", {
    "folder_id": FOLDER,
    "texts": [word],
    "targetLanguageCode": "ru"
}, {
    headers: {
        'Content-Type': 'aaplication/json',
        'Authorization': 'Bearer ' + IAM_TOKEN
    }
}).then((res) => {
    console.log(res.data)
}).then((err) => {
    console.log(err)
});