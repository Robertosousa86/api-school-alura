const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getPessoas);
router.get('/pessoas/:id', PessoaController.getPessoasById);

module.exports = router;
