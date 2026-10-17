const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato.ejs', {
        contato: {}
    })
}

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();
        
        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save( () => res.redirect('/contato'));
            return
        }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect('/'));
        return;

    } catch(e){
        console.log(e);
        return res.render('404');
    }
    
}

exports.registerContato = async function(req, res) {
    if(!req.params.id) return res.render('404.ejs');

    const contato = await Contato.buscaPorId(req.params.id);
    if(!contato) return res.render('404.ejs');

    res.render('contato.ejs', { 
        contato
    });
};

exports.editContato = async function(req, res) {
    try{
        if(!req.params.id) return res.render('404.ejs');

        const contato = new Contato(req.body)
        await contato.editContato(req.params.id)

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save( () => res.redirect(`/contato/${req.params.id}`));
            return;
        }

        req.flash('success', 'Contato atualizado com sucesso.');
        req.session.save(() => res.redirect('/'));
        return;

    } catch(e){
        console.log(e)
        res.render('404.ejs')
    }
};

exports.deleteContato = async function(req, res) {
    if(!req.params.id) return res.render('404.ejs');

    const contato = await Contato.delete(req.params.id);
    if(!contato) return res.render('404.ejs');

    req.flash('success', 'Contato apagado com sucesso.');
    req.session.save(() => res.redirect('/'));
    return;
}