// console.log('Im in B)')

//console.log('exports', exports)
 //console.log('dirname', __dirname)
 //console.log('filename', __filename)
 //console.log('require', require)

console.log('module', module)
setTimeout(() => {
    console.log('Its OK', module.loaded)
}, 2000)
module.exports = {
    txt: 'Zwrócone z notes.js'
};