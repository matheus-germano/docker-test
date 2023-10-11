const express = require('express');
// const db = require('./database');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ message: "Initial route" });
});

app.get('/users', async (req, res) => {
  let users = [];

  await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => users = data);

  return res.status(200).json(users);
});

app.get('/access', async (req, res) => {
  const logs = await db.query(`
      SELECT *
      FROM log
    `, []); 

    return res.status(200).json(logs);
});

app.post('/access', async (req, res) => {
  const accessed_at = new Date().getTime();

  const [row] = await db.query(`
      INSERT INTO log (accessed_at)
      VALUES ($1)
      RETURNING *
    `, [accessed_at]);

  return res.status(200).json(row);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});