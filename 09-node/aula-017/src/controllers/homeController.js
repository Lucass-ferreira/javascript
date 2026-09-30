exports.paginaInicial = (req, res) => {
    res.render('index.ejs', {
        titulo: 'Este sera o titulo da pagina',
        numeros: [0,1,2,3,4]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}