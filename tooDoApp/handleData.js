const colors = require('colors');
const fs = require('fs');

const handleData = (type, title) => {
    const data = fs.readFileSync('dataDB.json');
    let tasks = JSON.parse(data);

    if(type === 1 || type === 2){
        isExisted = tasks.find(task => task.title === title)? true : false;

        if(type === 1 && isExisted){
           return console.log("Takie zadanie już istnieje".red)
        }else if(type ===2 && !isExisted){
           return console.log("Nie można usunąć zadania".red)
        }
    }
    let dataJson = "";
    switch(type){
        case 1:
            tasks = tasks.map((task, index) =>({id:index + 1, title: task.title}))
            const id = tasks.length + 1;

            tasks.push({id, title});
            
            dataJSON = JSON.stringify(tasks);
            fs.writeFileSync('dataDB.json', dataJSON);
            console.log(`Dodaję zadanie: ${title}`.white.bgGreen)

            break;
        case 2:
            const index = tasks.findIndex(task => task.title === title)

            tasks.splice(index, 1)

            tasks = tasks.map((task, index) =>({id:index + 1, title: task.title}))

            dataJSON = JSON.stringify(tasks);
            fs.writeFile('dataDB.json', dataJSON, 'utf8', (err) => {
                if(err) throw err;
                console.log(`Usunięto zadanie: ${title}`.white.bgMagenta)
            });

            break;
        case 3:
            console.log(`Lista zadań do zrobienia obejmuje ${tasks.length} pozycji. \nDo zrobienia masz :`)
            if(tasks.length){
                tasks.forEach((task, index) => {
                    if(index % 2 === 0){
                        return console.log(task.title.yellow);
                     }
                     return console.log(task.title.green);
                });
            }
            break;
    }
}

module.exports = handleData;