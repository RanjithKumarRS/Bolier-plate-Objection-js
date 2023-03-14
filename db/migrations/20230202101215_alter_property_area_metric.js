/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.withSchema("public").alterTable("table_name", (table) => { 
    table.foreign("column_name").references("id").inTable("table_name");
    table.specificType("column_name","uuid ARRAY")
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.withSchema("public").alterTable("table_name", (table) => { 
    table.dropForeign("column_name");
  });
};
