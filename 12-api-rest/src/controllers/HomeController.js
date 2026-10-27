import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Maria',
            sobrenome: 'Ferreira',
            email: 'Maria@gmail.com',
            idade: 20,
            peso: 49.0,
            altura: 1.61,
        });
        res.json(novoAluno);
    }
};

export default new HomeController();
