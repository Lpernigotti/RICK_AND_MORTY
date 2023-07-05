import { useEffect,useState } from "react";
import{useParams} from 'react-router-dom';
import axios from "axios";
const Detail = () => {
   const {id} = useParams(); 
   const [character, setCharacter]= useState({});
   useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
    return (
        <div>
            <h1>{character?.name}</h1>,
            <img src={character?.image} alt="" />
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>

        </div>
    )
}
export default Detail