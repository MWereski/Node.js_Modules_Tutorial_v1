const users = [
    {id: 1, name: 'Adam'},
    {id: 2, name: 'Szaman'},
    {id: 3, name: 'Benio'},
    {id: 4, name: 'Gienio'}
];

module.exports = {
    showUsers(){
        const names = users.map(user => user.name)
        console.log('Users: ')

        names.forEach(name => console.log(name))
    },
    showUserObj(id){
        console.log('User With id - ' + id + ' is : ')
        const us = users.find(user => id === user.id)
        console.log(us)
    },
    userListLength: users.length
}