const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const ExpenseController = require('./app/controllers/ExpenseController');

const router = Router();

router.get('/users/:residenceId', UserController.index);
router.get('/users/:email', UserController.show);
router.get('/users/:email/:password', UserController.login);
router.delete('/users/:email', UserController.delete);
router.post('/users', UserController.store);
router.put('/users', UserController.update);

router.get('/expenses/:residenceId', ExpenseController.index);
router.get('/expenses/:category', ExpenseController.show);
router.delete('/expenses/:id', ExpenseController.delete);
router.post('/expenses', ExpenseController.store);
router.put('/expenses/:id', ExpenseController.update);

module.exports = router;
