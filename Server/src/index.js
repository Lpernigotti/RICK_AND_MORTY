
const PORT = 3001;
const server = require('../src/app');
const{ conn } = require('./DB_connection');

server.listen(PORT, async()=>{
   console.log(`server raised in port: ${PORT}`);
   await conn.sync({ force: true });
});