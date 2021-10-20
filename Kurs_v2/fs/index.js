const fs = require('fs');

// ACCESS

// fs.access('./names.txt', fs.constants.F_OK, (err) => {
//     console.log(err ? "PLiku nie można zapisywać" : "plik można zapisywać");
// })

// fs.access('./blocked.txt', fs.constants.W_OK, (err) => {
//     console.log(err ? "pliku nie można zapisywać" : "plik można zapisywać");
// })

// // RENAME
// try{
//     fs.renameSync('users.txt', 'użytkownicy.txt');
// }catch(err){
//     console.log(err);
// }

// fs.rename('names.txt', 'imiona.txt', (err) => {
//     console.log(err ? err : "Renamed file")
// })

// READDIR

//console.log(fs.readdirSync('./'))

// fs.readdir('./', (err, files) => {
//     if(err) console.log('Błąd: ', err);
//     else console.log("Zawartość: ", files)
// })

// READFILE
// fs.readFile('./imiona.txt', 'utf-8', (err, data) => {
//     if(err) return console.log(err)

//     console.log(data)
// })


// let names = "";
// try{
//     names = fs.readFileSync('./imiona.txt', 'utf-8')
    
// }catch(err){
//     //console.log(err)
//     names = "Error names";
// }

// console.log(names);

// WRITEFILE
fs.readFile('imiona.txt', 'utf-8', (err, data) => {
    if(err) console.log(err)
    else fs.appendFile('użytkownicy.txt', data, (err) => {
        if(err) console.log(err)
        else console.log("ZAPISANO!")
    })
})
