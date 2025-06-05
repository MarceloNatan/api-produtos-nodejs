const db = require('../utils/db');
const Produto = require('../models/product');

// Lista todos os produtos
exports.listar = (req, res) => {
    res.json(db.produtos);
};

// Busca produto por ID
exports.buscarPorId = (req, res) => {
    const produto = db.produtos.find(p => p.id === Number(req.params.id));
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });
    res.json(produto);
};

// Cria novo produto
exports.criar = (req, res) => {
    const novoProduto = new Produto(db.idAtual++, req.body.nome, req.body.preco);
    db.produtos.push(novoProduto);
    res.status(201).json(novoProduto);
};

// Edita produto existente
exports.editar = (req, res) => {
    const produto = db.produtos.find(p => p.id === Number(req.params.id));
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    res.json(produto);
};

// Remove produto
exports.remover = (req, res) => {
    const index = db.produtos.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado.' });
    db.produtos.splice(index, 1);
    res.status(204).send();
};