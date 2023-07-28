const {Favorite} = require ('../DB_connection');

const postFav = async (req,res) => {
    
    try {
        const {id, name, origin, status, image, species, gender} = req.body;
    
        if(!name || !id || !origin) return res.status(404).json({ message: "Faltan datos"});
    
        const character = {
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
        }
            
        const char = await Favorite.create(character);
        console.log(char)
        const favorites = await Favorite.findAll()
        res.status(200).json(favorites);
        
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = {
    postFav
}