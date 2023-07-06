import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites : [],
    allCharactersFav:[],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
       case ADD_FAV:
        return {
            ...state,
            myFavorites: [...state.allCharactersFav, action.payload],
            allCharactersFav:[...state.allCharactersFav, action.payload]
        }
       case REMOVE_FAV: 
       return{
        ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
       }

       case FILTER:
           const charactersFiltered=  state.allCharactersFav.filter(character => character.gender === action.payload)
        return{
            ...state,
            myFavorites:
            action.payload === "AllCharacters"
            ? [...state.allCharactersFav]
            : charactersFiltered

        }
       case ORDER: 
       const charactersCopy = [...state.allCharactersFav]
       return {
        ...state,
        myFavorites: 
        action.payload === "A"
        ? charactersCopy.sort((a,b)=> a.id - b.id)
        : charactersCopy.sort((a,b) => b.id - a.id)
       }
        default :
        return { ...state}
    }
}

export default reducer;