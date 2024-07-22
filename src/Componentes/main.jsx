import React from 'react';
import './Main.css';

function Main({nota, EliminarNota}) {
    // Desestructuramos las propiedades de la nota
    const { title, description, important } = nota;
    console.log(nota);
    return (
        <div className={important ? 'post-it important' : 'post-it'}>
            <div className='flex'>
                <h5>{title}</h5>
                <button className='boton-eliminar' onClick={() => EliminarNota(title)}>X</button>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Main;