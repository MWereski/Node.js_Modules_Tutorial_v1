
const colors = require('colors');

const parseArgs = require('minimist');

const command = parseArgs(process.argv.slice(2, 3));
delete command._;

const handleCommand =  ({add, remove, list}) =>{
    if(add){
        if(typeof add != "string"){
            return console.log("Wpisz nazwę dodawanego zadania ! TEXT".bgRed)
        } else if(add.length < 7){
            return console.log("Podaj conajmniej 7 znaków! ".bgRed)
        }
        //handleData();
    }else if(remove){
        if(typeof remove != "string" || remove.length < 7){
            return console.log("Nieprawidłowy argument!".bgRed)
        }
        handleData();
    }else if(list || list === ""){
        handleData();
    }else{
        console.log("Nieznane polecenie".red)
    }
}
const handleData = () => {

}
handleCommand(command)