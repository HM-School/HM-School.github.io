
const { neon } = require("@neondatabase/serverless");
const sql = neon(process.env.PGHOST);

/**
* @param {VercelRequest} request
* @param {VercelResponse} response
*/
module.exports = async (request, response) => {
    // const result = await sql`SELECT * FROM test_data;`
    response.status(200).send('it works !'); 
    return
}