const { User } = require('../DB_connection');
require('dotenv').config();
const {DB_PASSWORD, DB_EMAIL} = process.env
const login = async (req,res) => {
    try {
       const {email, password } = req.query;
       
       if(!email || !password ) {
        return res.status(500).send("Faltan datos");
       }
       
      if(password === DB_PASSWORD && email === DB_EMAIL){
        res.status(200).json({ access: true});
      } else{
        res.status(200).json({ access: false });
      }
    } catch (error) {
      res.status(500).send(error.message);  
    }
};



module.exports = {
    login
    
}