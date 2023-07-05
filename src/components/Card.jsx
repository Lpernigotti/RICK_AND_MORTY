import style from './Card.module.css';
import {NavLink} from 'react-router-dom'
 import {addFav, removeFav} from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
function Card({id,name,species,gender,image,onClose,addFav, removeFav, myFavorites }) {
   const [isFav , setIsFav] = useState(false);
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      } else{
         setIsFav(true);
         addFav({id,name,species,gender,image,onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
        <div className={style.cardContainer}>
        <div className={style.card}>
            <button onClick={handleFavorite}> {isFav? '❤️' : '🤍' }</button>
         <button onClick={() => onClose(id)} className={style.boton}>X</button>
         <NavLink to={`/detail/${id}`} >
            <div>
            <img src={image} alt=''  className={style.image}/> 
            </div>
         </NavLink>
         <h2 className={style.name}>{name}</h2>
         <h2 className={style.name}>Species:{species}</h2>
         <h2 className={style.name}>Gender:{gender}</h2>
          </div>

        </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) =>  {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);