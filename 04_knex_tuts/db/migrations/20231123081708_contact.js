/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contacts", (table) => {
    table.increments("id");
    table.integer("user_id").unsigned().references("id").inTable("user");
    table.string("address");
    table.string("phone");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("contacts");
};
