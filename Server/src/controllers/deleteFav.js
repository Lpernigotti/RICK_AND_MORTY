const {Favorite} = require ('../DB_connection');

const deleteFav = async(req,res) => {
   try {
       const { id } = req.params;
        if(!id) {
            return res.status(404).json({ message: "id not found"});
        }
      
        const characterDeleted = await Favorite.findByPk(id);
       if(characterDeleted){
        await Favorite.destroy({
            where:{
                id
            }
        })
       }
       
       
       const favorites = await Favorite.findAll();
       return res.status(200).json(favorites);
    
   } catch (error) {
    res.status(500).send(error.message);
   };
    
};

module.exports = {
    deleteFav
}