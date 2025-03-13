
const { neon } = require("@neondatabase/serverless");
const sql = neon(process.env.PGHOST);

/**
* @param {VercelRequest} request
* @param {VercelResponse} response
*/
module.exports = async (request, response) => {
    if (request.method !== "POST") {
        return response.status(405).json({ message: "Method Not Allowed" });
    }

    const { email, password } = request.body;
    if (!email || !password) {
        return response.status(400).json({ message: "Email and password are required" });
    }

    try {
        await sql`INSERT INTO users (email, password) VALUES (${email}, ${password});`;
        response.status(200).json({ message: "User registered successfully!" });
    } catch (error) {
        response.status(500).json({ message: "Database error", error: error.message });
    }
};