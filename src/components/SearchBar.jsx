import { useState } from 'react';
import style from './SearchBar.module.css'
export default function SearchBar({onSearch}) {
  const [id,setId] = useState('')

  const handleChange = (event) => {
   setId(event.target.value)

  }
  
   return (
      <div>
         <input className= {style.input} type='search' value={id} onChange={handleChange} />
         <button onClick={()=> {onSearch(id) ; setId('')}} className={style.boton}>Agregar</button>
      </div>
   );
}
