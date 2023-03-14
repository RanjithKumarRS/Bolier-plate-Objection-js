/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("table_name")
    .insert([
      {
        id: 1, 
      } 
    ])
    .onConflict("id")
    .merge();
};
