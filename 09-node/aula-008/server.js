const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    // res.send('Hello <b>word!</b>');
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar tudo</button>
        </form>    
    `)
});

app.get('/testes{/:idUsuarios/:parametros}', (req, res) => {
    console.log(req.params); // parte que vem da url /profile/3
    console.log(req.query);  // vem da query string /?chave=valor&
    res.send(req.params);
})

app.post('/', (req, res) => {
    console.log(req.body); //vai vim chaves de acordo com o form
    res.send(`O que voçê me enviou foi: ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})