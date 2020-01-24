const db = require('../data/db-config')

module.exports ={
    find,
    add,
    findTasks
}

function find(){
    return db('projects')
}

function findById(id){
    return db('projects').where({id}).first()
}

function add(data){
    return db('projects')
    .insert(data)
    .then(([id]) => {
        return findById(id)
    })
}

function findTasks(projectId){
    return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select('tasks.id as task_id', 'tasks.description as task_description', 'projects.name as project_name', 'projects.description as project_description')
    .where('tasks.project_id', '=', projectId)
}