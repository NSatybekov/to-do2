/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
             .createTable('to_do', function(table){
                table.increments('to_do_id');
                table.integer('user_id').notNullable()
                                        .references('id').inTable('users');
                table.string('to_do_title', 100).notNullable();
                table.string('to_do_text', 1000).notNullable()
             })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('to_do')
};
