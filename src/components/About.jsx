import style from './About.module.css'
const About = () => {
    return (
        <div className={style.aboutContainer}>

            <h2 className={style.aboutH2}>ABOUT ME...</h2>,
            <h2 className={style.abouth2}>Bienvenido a mi proyecto "Rick and Morty"! </h2>
              <div className={style.textContainer}>
                <h3 className={style.abouth3}>Mi nombre es Lola Pernigotti, tengo 18 años y estoy estudiando  Full-Stack Developer en Henry.</h3>
               <p className={style.aboutP}>
                La idea de este proyecto es poder empezar a familiarizarnos con el mundo del desarrollo web, como manipularlo, hacerlo interactivo para con el usuario e ir adquiriendo herramientas basicas para los siguientes modulos. Aqui encontraras a todos los personajes de esta reconocida  y famosa serie animada "Rick y Morty". Cada personaje posee un "id" que lo identifica, podras encontrarlos colocando el numero que desees.Dependiendo de tus gustos o preferencias podras darle click al corazon y te creara un espacio con todos tus personajes favoritos... Espero que disfrutes de esta App al igual que yo lo hice creandola.        
               </p> ,
               <p className={style.aboutP}> Si deseeas contactarme podras hacerlo atraves de mi mail: pernigottilola@gmail.com</p>
              </div>
        </div>
    )
}
export default About