const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "tF85ELcPfmwz0KIBC11s",
    host: "containers-us-west-157.railway.app",
    port: 6656,
    database: "railway"
});

module.exports = pool;
