const db = require('../../database');

class ExpensesRepository {
  async findAll({ orderBy = 'ASC', residenceId }) {
    console.log(orderBy);
    // const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query('SELECT * FROM expenses S WHERE S.residenceId = $1', [residenceId]);
    return rows;
  }

  async findByCategory(category) {
    const [row] = await db.query('SELECT * FROM expenses S WHERE S.category = $1', [category]);

    return row;
  }

  async create({
    category, description, value, createdAt, expireAt, paid, residenceId,
  }) {
    const [row] = await db.query(`
    INSERT INTO expenses(category, description, value, createdAt, expireAt, paid,
                          residenceId)
    VALUES($1,$2,$3,$4,$5,$6,$7)
    RETURNING *
    `, [category, description, value, createdAt, expireAt, paid, residenceId]);

    return row;
  }

  async update({ id, paid }) {
    const [row] = await db.query(`
      UPDATE expenses
      SET paid = $1
      WHERE id = $2
      RETURNING *
    `, [paid, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM expenses S WHERE S.id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new ExpensesRepository();
