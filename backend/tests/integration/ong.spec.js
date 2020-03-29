const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();        //zera banco de dados antes de executar o testes
        await connection.migrate.latest();
    })

    afterAll(async() => {
        await connection.destroy();
    });

    it('should be able to crate a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email: "contato@hotmail.com",
            whatsapp: "027123456789",
            city: "Vila Velha",
            uf: "ES"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});