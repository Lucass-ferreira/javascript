exports.paginaInicial = (req, res) => {
    res.render('index.ejs');
    return;
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST');
    return;
}