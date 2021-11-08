// http://numbersapi.com/random/year?json
// zad1
// const fetch = require('node-fetch');
// const year = process.argv[2] || Math.floor( Math.random() * 2020);

// console.log(year);

// fetch(`http://numbersapi.com/${year}/year?json`)
// .then(res => {
//     console.log(res.status);
//     console.log(res.ok)
//     return res.json()
// })
//     .then(data => console.log(data.text))
// .catch(err => console.log('Error: ', err))

// ZAD 2
//`http://numbersapi.com/${number}/${type}?json`

// const fetch = require('node-fetch');

// console.log(process.argv)
// const arg = process.argv[2];
// let type = ""

// if(arg.indexOf('--year') === 0) {
//     console.log("szukamy ciekawostki roku")
//     type = 'year';
// }else if(arg.indexOf('--math') === 0){
//     console.log("szukamy informacji o liczbie")
//     type = 'math';
// }else if(arg.indexOf('--trivia') === 0){
//     console.log("szukamy liczby-ciekawostki")
//     type = 'trivia';
// }

// const equalSign = arg.search('=');
// //console.log(equalSign)

// if(equalSign === -1) console.log("Podaj wartość!")
// const number = arg.slice(equalSign + 1);

// if(number === "" || isNaN(Number(number))) {
//     console.log("To nie jest liczba")
//     //process.exit();
// }

// fetch(`http://numbersapi.com/${number}/${type}?json`)
// .then(res => {
//     if(res.ok){
//         return res.json();
//     } else{
//         throw new Error("Coś nie tak: " + res.status)
//     }
// })
//     .then(data => console.log(data.text))
// .catch(err => console.log("ERROR: ", err))

// ZAD 3 request NBP - API
// `http://api.nbp.pl/api/exchangerates/rates/A/${code}/`
const request = require('request');
const fs = require('fs');

const validCodes = ['USD', 'EUR', 'GBP', 'CHF',
                    'usd', 'eur', 'gbp', 'chf'];

const code = process.argv[2];

const isValid = validCodes.find(currency => currency === code)? true : false;

const url = `http://api.nbp.pl/api/exchangerates/rates/A/${code}/?format=json`

request(url, {json:true}, (err, res, body) =>{
   if(err){
       return console.log("ERROR: ", err);
   }
   if(res.statusCode != 200){
       return console.log("Nie tak sprawdź URL: " + res.statusCode)
   }
   const message = `Średnia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid} złotych`;
   fs.appendFile('currencies.txt', message + '\n', (err) => {
       console.log("Dodano do pliku");
   })

   console.log(message)

   
})

