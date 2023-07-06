import Card from "./Card";
import { connect } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({myFavorites}) => {
    
    
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    return (
        <div>
        <select onChange={handleOrder}>
            <option value="Ascendente"> Ascendente</option>
            <option value="Descendiente"> Descendiente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="AllCharacters"></option>
        </select>
        {
            myFavorites?.map(fav => {
                return (
                    <Card
                    key={fav.id}
                    id={fav.id}
                    name= {fav.name}
                    species={fav.species}
                    gender= {fav.gender}
                    image= {fav.image}
                    onClose={fav.onClose}
                    />
                )
            })
        }


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps,null)(Favorites);