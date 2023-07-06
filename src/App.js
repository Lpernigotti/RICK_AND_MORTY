import style from './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/Detail.jsx';
import About from './components/About.jsx';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes , Route , useLocation, useNavigate} from 'react-router-dom';



const email = 'lolapernigotti@gmail.com'
const password = '45606921Lola'
function App() {
  
   const [access, setAccess] = useState(false)
   const navigate = useNavigate();
    const login = (userData) => {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logOut = () => {
      setAccess(false);
      navigate('/');
   }
  const location = useLocation();
   const [characters, setCharacters] = useState([])
   
   const  onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character =>
         character.id !== Number(id))
         setCharacters(charactersFiltered)
   }
   
      return (
      
         
      <div className={style.app}>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut}/>
         }
      <Routes>
          <Route path = '/home' element = {<Cards characters={characters}  onClose={onClose}/>}   />
          <Route path = 'about' element = {<About/>} />
          <Route path = '/detail/:id' element = { <Detail/>}/>
          <Route path='/' element={<Form login= {login}/> } />
          <Route path= '/favorites' element={ <Favorites/>} />
      </Routes>
      </div>
   );
}

export default App;
