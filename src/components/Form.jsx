import { useState } from "react";
import validate from "./validations";
import style from "./Form.module.css"
const Form = ({login}) => {
   
    const [errors, setErrors] = useState({})
  const [userData, setUserData]= useState({
    email: "",
    password: ""
  }) 
  const HandleChange = (evento) =>{
    setUserData({
        ...userData,
        [evento.target.name]: evento.target.value
    })

    setErrors(validate({
      ...userData,
      [evento.target.name]: evento.target.value
    }))
  }
  
  const handleSubmit = (evento) => {
    evento.preventDefault();
    login(userData);

  }
    return (
        <div className={style.contenedor}>
        <form onSubmit={handleSubmit} className={style.box}>
        <div className={style.imageContainer}> 
        <img src="https://www.kindpng.com/picc/m/102-1022311_transparent-rick-and-morty-clipart-rick-and-morty.png
          " alt="rickymorty" className={style.image} />
        </div>
            <label htmlFor="email" className={style.label}>Email: </label>
            <input type="email" name="email" placeholder="Ingrese su email porfavor" value={userData.email}
            onChange={HandleChange} className={style.input}/>
            {errors.email && <p style={{color: "red"}}>{errors.email} </p>}
            <br />
            <label htmlFor="password" className={style.label}>Password: </label>
            <input type="password" name="password" placeholder="Ingrese una contraseña" value={userData.password}
            onChange={HandleChange} className={style.input} />
            {errors.password && <p style={{color: "red"}}>{errors.password} </p>}
            <br />
           <div className={style.botonContainer}>
            <button className={style.botonSubmit}>SUBMIT</button>
           </div>
        </form>

        </div>
    )
}
export default Form;