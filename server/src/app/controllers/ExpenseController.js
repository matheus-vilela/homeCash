const ExpensesRepository = require('../repositories/ExpensesRepository');

class ExpenseController {
  async index(request, response) {
    const { orderBy } = request.query;
    const { residenceId } = request.params;
    const expenses = await ExpensesRepository.findAll({ orderBy, residenceId });

    response.json(expenses);
  }

  async show(request, response) {
    const { category } = request.params;
    const expense = await ExpensesRepository.findByCategory(category);

    if (!expense) {
      return response.status(404).json({ error: 'Você não possui despesas' });
    }

    response.json(expense);
  }

  async store(request, response) {
    const {
      category, description, value, createdAt, expireAt, paid, residenceId,
    } = request.body;
    console.log(request.body);
    if (!category) {
      return response.status(400).json({ error: 'Selecione uma categoria de despesa' });
    }

    if (!value) {
      return response.status(400).json({ error: 'Informe o valor da despesa' });
    }

    if (!createdAt) {
      return response.status(400).json({ error: 'Informe a data de registro' });
    }

    if (!expireAt) {
      return response.status(400).json({ error: 'Informe a data de vencimento da despesa' });
    }

    if (!paid) {
      return response.status(400).json({ error: 'Informe o status da despesa' });
    }

    if (!residenceId) {
      return response.status(400).json({ error: 'Informe o id do criador da despesa' });
    }

    const expense = await ExpensesRepository.create({
      category, description, value, createdAt, expireAt, paid, residenceId,
    });

    response.json(expense);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      category, info, value, expireAt, paid,
    } = request.body;

    const expensesExists = await ExpensesRepository.findById(id);
    if (!expensesExists) {
      return response.status(404).json({ error: 'Você não possui despesas' });
    }

    if (!category) {
      return response.status(400).json({ error: 'Digite a categoria da despesa' });
    }

    if (!value) {
      return response.status(400).json({ error: 'Digite o valor da despesa' });
    }

    if (!expireAt) {
      return response.status(400).json({ error: 'Digite a data de vencimento' });
    }

    const expense = await ExpensesRepository.update(id, {
      category, info, value, expireAt, paid,
    });

    response.json(expense);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ExpensesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ExpenseController();
