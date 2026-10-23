const Login = require('../models/LoginModel');

exports.cadastro = (req, res) => {
    res.render('cadastro.ejs')
}

exports.register = async (req, res) => {
    try{
        const login  = new Login(req.body);
        await login.register();

        if(login.errors.length > 0 ){
            req.flash('errors', login.errors);

            req.session.save(function() {
                return res.redirect('/cadastro');
            });

            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function() {
            return res.redirect('/cadastro');
        });
    } catch(e){
        console.log(e);
        res.render('404');
    }


}