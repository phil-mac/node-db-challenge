const db = require('../data/db-config')

module.exports ={
    find,
    add,
    findTasks,
    findProjectDetails
}

function find(){
    return db('projects')
}

function findById(id){
    return db('projects').where({id}).first()
}

function findProjectDetails(id){
    return db('projects').where({id}).first()

    .then(project => {
        return db('tasks').where('tasks.project_id', '=', id)
        .select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed')

        .then(tasks => {
            return db('project_resources')
            .join('resources', 'project_resources.resource_id', 'resources.id')
            .select('resources.id','resources.name', 'resources.description')
            .where('project_resources.project_id', '=', id)
            
            .then(resources => {
                return {
                    ...project,
                    completed: project.completed ? true : false,
                    tasks: tasks.map(task => ({
                        ...task,
                        completed: task.completed ? true : false
                    })),
                    resources: resources
                }
            })
        })
    })
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