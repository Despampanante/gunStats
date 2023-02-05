const Pool = require("pg").Pool;

const connectionString = "postgresql://postgres:tF85ELcPfmwz0KIBC11s@containers-us-west-157.railway.app:6656/railway"
// const pool = new Pool({
//     user: "postgres",
//     password: "tF85ELcPfmwz0KIBC11s",
//     host: "containers-us-west-157.railway.app",
//     port: 6656,
//     database: "railway"
// });
const pool = new Pool({
    connectionString,
})

module.exports = pool;
