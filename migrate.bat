 ---migrated files----
npx knex migrate:make file_name  --knexfile ./db/knexfile.js 


---migrate down single file---
npx knex migrate:up file_name.js --knexfile ./db/knexfile.js
npx knex migrate:down file_name.js --knexfile ./db/knexfile.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.withSchema('public').createTableIfNotExists('',table=>{
        table.uuid('id').primary().defaultTo(knex.raw("uuid_generate_v4()"));
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.withSchema('public').dropTableIfExists('');
};
