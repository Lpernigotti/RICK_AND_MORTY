const {User} = require('../DB_connection');

const postUser = async (req,res) => {
    try {
        const {email, password, id} = req.body;
        if(!email || !password) {
            return res.status(404).json({ message: "Faltan datos obligatorios"})
        }
       
        const user = await User.create({email, password,id})
        res.status(200).json(user)
   
    } catch (error) {
       return res.status(404).send(error.message); 
    }
};

module.exports = {
    postUser
}