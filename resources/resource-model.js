const db = require('../data/db-config')

module.exports ={
    find,
    add,
}

function find(){
    return db('resources')
}

function findById(id){
    return db('resources').where({id}).first()
}

function add(data){
    return db('resources')
    .insert(data)
    .then(([id]) => {
        return findById(id)
    })
}