exports.up = function(knex) {  //esse comando sobe a tabela
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {  //esse comando é tipo: "caso de merda, faça isso >> [nesse caso, delete]"
    return knex.schema.dropTable('ongs');
};
