exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable().unique();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
