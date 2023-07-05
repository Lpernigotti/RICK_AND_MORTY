
 const validate = (userData) => {
   const errors = {};
    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = "Revisa tu email por favor.."
    }
    if(!userData.email){
        errors.email = "debes ingresar un email"
    }
    if(userData.email.length > 35){
        errors.email= "el email no puede superar los 35 caracteres "
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "tu contraseña debe tener al menos un numero"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = " tu contraseña debe tener entre 6 y 10 caracteres"
    }
    return errors;
   
}
export default validate;