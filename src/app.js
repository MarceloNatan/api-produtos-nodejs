const express = require('express');
const app = express();
const produtosRouter = require('./routes/products');

app.use(express.json());
app.use('/produtos', produtosRouter);

app.listen(3000, () => {
    console.log('API de produtos rodando em http://localhost:3000');
});