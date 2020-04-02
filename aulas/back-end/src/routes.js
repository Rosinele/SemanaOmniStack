const express = require('express');

const routes = express.Router();

routes.post('/users/', (request, response) =>{
    // query params const params = request.query;
    // route params const params = request.params;
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 1.0',
        aluno: 'Maria Rose Félix do Nascimento'
    });
});

module.exports = routes;