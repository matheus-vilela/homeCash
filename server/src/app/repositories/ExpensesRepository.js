const db = require('../../database');

class ExpensesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM expenses ORDER BY value ${direction}`);

    return rows;
  }

  async findByCategory(category) {
    const [row] = await db.query('SELECT * FROM expenses S WHERE S.category = $1', [category]);

    return row;
  }

  async create({
    category, info, value, registerdate, duedate, payed, userid,
  }) {
    const [row] = await db.query(`
    INSERT INTO expenses(category, info, value, createdAt, expireAt, paid,
                          userid)
    VALUES($1,$2,$3,$4,$5,$6,$7)
    RETURNING *
    `, [category, info, value, registerdate, duedate, payed, userid]);

    return row;
  }

  async update(id, {
    category, info, value, payed, dueDate,
  }) {
    const [row] = await db.query(`
      UPDATE expenses
      SET category = $1, info = $2, value = $3, paied = $4, expireAt = $5
      WHERE id = $6
      RETURNING *
    `, [category, info, value, payed, dueDate, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM expenses S WHERE S.id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new ExpensesRepository();
