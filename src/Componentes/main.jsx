import React from 'react';

function Main({nota, EliminarNota}) {
    // Desestructuramos las propiedades de la nota
    const { title, description, important } = nota;
    console.log(nota);
    return (
        <main>
            {/* Si la nota es importante le pasamos la clase important */}
            <div className={important ? 'note important' : 'note'}>
                <div className='flex'>
                    <h2>{title}</h2>
                    <button onClick={() => EliminarNota(title)}>X</button>
                </div>
                <p>{description}</p>
            </div>
        </main>
    )
}

export default Main;