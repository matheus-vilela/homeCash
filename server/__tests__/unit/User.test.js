/* eslint-disable no-undef */
const UserController = require('../../src/app/controllers/UserController');

// eslint-disable-next-line no-undef
describe('UserOperations', () => {
  // eslint-disable-next-line no-undef
  it('should create a user', async () => {
    const user = await UserController.store({
      body: {
        name: 'Gabriel',
        password: '123456',
        email: 'gabriel@email.com',
      },
    }, (value) => {
      console.log(value);
    });

    console.log(user);

    return expect(user.email).toBe('gabriel@email.com');
  });

  it(' not should sign in', async () => {
    const confirmation = await UserController.login({ params: { email: 'gabriel@email.com', password: '12456' } });

    return expect(confirmation).toBe(204);
  });

  it('should delete a user', async () => {
    const confirmation = await UserController.delete({ params: { email: 'gabriel@email.com' } });

    return expect(confirmation).toBe(204);
  });
});
