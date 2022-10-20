const db = require('../../database');

class UsersRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM users ORDER BY name ${direction}`);
    return rows.map((row) => ({ ...row, password: '' }));
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM users U WHERE U.email = $1', [email]);
    return row;
  }

  async create({
    name, password, email,
  }) {
    const [row] = await db.query(`
    INSERT INTO users(name, password, email)
    VALUES($1,$2,$3)
    RETURNING *
    `, [name, password, email]);

    return row;
  }

  async update(email, {
    group,
  }) {
    const [row] = await db.query(`
      UPDATE users U
      SET group = $1
      WHERE U.email = $2
      RETURNING *
    `, [group, email]);
    return row;
  }

  async delete(email) {
    const deleteOp = await db.query('DELETE FROM users U WHERE U.email = $1', [email]);
    return deleteOp;
  }
}

module.exports = new UsersRepository();
