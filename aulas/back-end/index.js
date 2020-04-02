const express = require("express");

const app = express();


app.use(express.json());
 
app.post('/users/', (request, response) =>{
    // query params const params = request.query;
    // route params const params = request.params;
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 1.0',
        aluno: 'Rose Félix'
    });
});

app.listen(3333);