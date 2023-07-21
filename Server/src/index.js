
const PORT = 3001;
const server = require('../src/app');
server.listen(PORT, ()=>{
   console.log(`server raised in port: ${PORT}`)
});