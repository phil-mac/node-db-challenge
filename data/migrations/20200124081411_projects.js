
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()

        tbl.string('name', 128).notNullable().index()
        tbl.string('description', 512)
        tbl.boolean('completed').notNullable().defaultTo(false)
    })
    .createTable('tasks', tbl => {
        tbl.increments()

        tbl.integer('project_id')
            .unsigned().notNullable()
            .references('id').inTable('projects')
            .onDelete()
            .onUpdate('CASCADE')

        tbl.string('description', 512).notNullable()
        tbl.string('notes', 1024)
        tbl.boolean('completed').notNullable().defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments()

        tbl.string('name', 128).unique().notNullable()
        tbl.string('description', 1024)
    })
    .createTable('project_resources', tbl => {
        tbl.increments()

        tbl.integer('project_id')
            .unsigned().notNullable()
            .references('id').inTable('projects')
            .onDelete()
            .onUpdate('CASCADE')
        
        tbl.integer('resource_id')
            .unsigned().notNullable()
            .references('id').inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
