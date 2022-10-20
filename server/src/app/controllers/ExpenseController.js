const ExpensesRepository = require('../repositories/ExpensesRepository');

class ExpenseController {
  async index(request, response) {
    const { orderBy } = request.query;
    const expenses = await ExpensesRepository.findAll(orderBy);

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
      category, info, value, registerdate, dueDate, payed, userid,
    } = request.body;
    console.log(request.body);
    if (!category) {
      return response.status(400).json({ error: 'Selecione uma categoria de despesa' });
    }

    if (!value) {
      return response.status(400).json({ error: 'Informe o valor da despesa' });
    }

    if (!registerdate) {
      return response.status(400).json({ error: 'Informe a data de registro' });
    }

    if (!dueDate) {
      return response.status(400).json({ error: 'Informe a data de vencimento da despesa' });
    }

    if (!payed) {
      return response.status(400).json({ error: 'Informe o status da despesa' });
    }

    if (!userid) {
      return response.status(400).json({ error: 'Informe o id do criador da despesa' });
    }

    const expense = await ExpensesRepository.create({
      category, info, value, registerdate, dueDate, payed, userid,
    });

    response.json(expense);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      category, info, value, dueDate, payed,
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

    if (!dueDate) {
      return response.status(400).json({ error: 'Digite a data de vencimento' });
    }

    const expense = await ExpensesRepository.update(id, {
      category, info, value, dueDate, payed,
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
