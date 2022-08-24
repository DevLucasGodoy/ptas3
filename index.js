const express = require('express');
const { usuario } = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.get('/', async function(req, res){
  // var resultado = await usuario.findAll();
  // res.json(resultado);
})

app.get('/autenticar', async function(req, res){
    res.render("autenticar")
})

app.get('/inscrever', async function(req, res){
    res.render("inscrever")
})

app.post('/logar', async function(req, res){
  if (req.body.usuario == "lucas" && req.body.senha == "1234"){
    res.json("Login com sucesso");
  } else {
    res.json("Usuário ou Senha Incorretos");
  }
});

app.post('/deslogar', async function(req, res){
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});
