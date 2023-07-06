import { useEffect,useState } from "react";
import{useParams} from 'react-router-dom';
import axios from "axios";
import style from './Detail.module.css';
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
        <div className={style.detailContainer}>
            <h1>{character?.name}</h1>,
            <img src={character?.image} alt={character?.name} className={style.image}/>
            <p> Status: {character?.status}</p>
            <p> Species: {character?.species}</p>
            <p> Gender: {character?.gender}</p>
            <p> Origin: {character?.origin?.name}</p>

        </div>
    )
}
export default Detail