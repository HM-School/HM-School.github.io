const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configure your database connection
const pool = new Pool({
  user: 'MerakiInfoHubCluster_owner',
  host: 'ep-small-queen-a6swesn2.us-west-2.aws.neon.tech',
  database: 'MerakiInfoHubCluster',
  password: 'Dmcdz1vq4Elp',
  port: 5432,
});

app.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
