const express = require("express");

const app = express();

app.get('/', (request, response) =>{
    return response.json({
        evento: 'Semana OmniStack 1.0',
        aluno: 'Rose Félix'
    });
});

app.listen(3333);