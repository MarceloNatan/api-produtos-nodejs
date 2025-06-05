// Middleware de validação de produto
function validarProduto(req, res, next) {
    const { nome, preco } = req.body;
    if (!nome || typeof nome !== 'string' || nome.trim().length < 3) {
        return res.status(400).json({ erro: 'O nome é obrigatório e deve ter pelo menos 3 caracteres.' });
    }
    if (preco === undefined || typeof preco !== 'number' || preco < 0) {
        return res.status(400).json({ erro: 'O preço é obrigatório e deve ser um número positivo.' });
    }
    next();
}

module.exports = validarProduto;