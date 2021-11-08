const colors = require('colors');
const handleData = require('./handleData')

const handleCommand =  ({add, remove, list}) =>{
    if(add){
        if(typeof add != "string"){
            return console.log("Wpisz nazwę dodawanego zadania ! TEXT".bgRed)
        } else if(add.length < 7){
            return console.log("Podaj conajmniej 7 znaków! ".bgRed)
        }
        handleData(1, add);

    }else if(remove){
        if(typeof remove != "string" || remove.length < 7){
            return console.log("Nieprawidłowy argument!".bgRed)
        }
        handleData(2, remove);

    }else if(list || list === ""){
        handleData(3, null);

    }else{
        console.log("Nieznane polecenie".red)
    }
}

module.exports = handleCommand;