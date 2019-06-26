import React from 'react';

import logo from '../../../assets/img/fondo.png';
import arquero from '../../../assets/img/arquero.jpg';
import futbol from '../../../assets/img/futbol.jpg';

const About = () => {
    return (
        <React.Fragment>

            <h1 className="animated fadeIn fast">Segundo examen (16%)</h1>
            <hr />
            <p className="animated fadeIn">
                <p><h2 className="animated fadeIn fast">Indicaciones:</h2></p>
                <div>
                    <ol>
                        <li>Descargar todo el proyecto de Heroes-React.</li>
                        <li>En este espacio, usted debe crear una página que tenga que ver con su proyecto de clase.</li>
                        <li>Entre los integrantes del proyecto no pueden existir paginas iguales, ni similares.</li>
                        <li>El proyecto completo debe adicionarse al GitHub.</li>
                        <li>En un documento ubicado en el Google Drive cada uno escribirá el enlace suministrado por GitHub para una posterior descarga.</li>
                        <li>El contenido de la página como mínimo debe tener algo similar a la página de "Heroes"; es decir, varias imagenes, enlaces, divisiones, lo que usted considere pertinente para ganarse un 5.0.</li>
                        <li>A las 12 m. del día de hoy debe estar el enlace en el Google Drive.</li>

                    </ol>
                </div>
            </p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div><img src={logo} alt="logoRSS" /></div>
            </div>




            <p className="animated fadeIn">
                <p><h2 className="animated fadeIn fast">Proyecto RSS:</h2></p>
                <div>
                    “Regional Soccer Score” nace con el fin de brindar a los amantes del fútbol amateur la posibilidad de visualizar los resultados de los partidos disputados a nivel regional, crear sus propios eventos futbolísticos y compartirlos por medio de la plataforma, además de conocer los datos de los futuros torneos que realizarán.
                </div>
            </p>

            <p>
                <div>
                    La funcion es mostrar en vivo torneos y resultados, fotos videos sobre los partidos de futbol.
                </div>
            </p>


            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={arquero} alt="arquero" />;
                
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                
            <img src={futbol} alt="futbol" />;
            </div>
            
            



        </React.Fragment>
    )


}



export default About;