const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response) {
    const { orderBy } = request.query;
    const { residenceId } = request.params;
    const users = await UsersRepository.findAll({ orderBy, residenceId });
    response.header('Access-Control-Allow-Origin', '*');
    response.json(users);
  }

  async show(request, response) {
    const { email } = request.params;
    const user = await UsersRepository.findByEmail(email);

    if (!user) {
      return response.status(404).json({ error: 'Usuário não encontrado' });
    }

    response.header('Access-Control-Allow-Origin', '*');
    response.json(user);
  }

  async store(request, response) {
    const {
      name, password, email,
    } = request.body;

    if (!email) {
      return response.status(400).json({ error: 'Digite um e-mail' });
    }

    const userExists = await UsersRepository.findByEmail(email);

    if (userExists) {
      return response.status(400).json({ error: 'Esse e-mail já está cadastrado' });
    }

    if (!password) {
      return response.status(400).json({ error: 'Digite uma senha' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Digite um nome' });
    }

    const user = await UsersRepository.create({
      name, password, email,
    });

    // Ativar o return e comentar a linha 53 para realiar os tester
    // return (user);
    response.json({ ...user, password: '' });
  }

  async login(request, response) {
    const {
      email, password,
    } = request.params;

    // comentar a linha 61 para realizar o teste
    response.header('Access-Control-Allow-Origin', '*');

    if (!email) {
      return response.status(400).json({ error: 'Digite um e-mail' });
    }

    const userExists = await UsersRepository.findByEmail(email, 'login');
    if (!userExists) {
      return response.status(400).json({ error: 'Usuário não encontrado' });
    }

    if (!password) {
      return response.status().jeson({ error: 'Digite uma senha' });
    }

    if (userExists.password !== password) {
      return response.status(406).json({ error: 'Senha incorreta' });
    }

    // Ativar o return e comentar a linha 81 para realiar os tester
    // return (204);
    response.json({ ...userExists, password: '' });
  }

  async update(request, response) {
    const {
      email, residence, type,
    } = request.body;

    const usersExists = await UsersRepository.findByEmail(email);
    if (!usersExists) {
      return response.status(404).json({ error: 'Usuário não encontrado' });
    }

    if (type === 'created') {
      const groupExists = await UsersRepository.findByEmail(email);
      if (groupExists) { return response.status(404).json({ error: 'Já existe um grupo com esse nome' }); }
    }

    const user = await UsersRepository.update({
      email, residence,
    });

    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Origin', '*');
    response.json(user);
  }

  async delete(request, response) {
    const { email } = request.params;

    await UsersRepository.delete(email);

    // Ativar o return e comentar a linha 115 para realiar os tester
    // return (204);
    response.sendStatus(204);
  }
}

module.exports = new UserController();
