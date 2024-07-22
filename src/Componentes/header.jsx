import React, { useRef, useState } from 'react';
import Main from './main';
import './Header.css';

function Header() {
  // Crearemos referencias para los inputs
  const titleRef = useRef();
  const descriptionRef = useRef();
  const importantRef = useRef();

  // Estados para mensaje y las notas
  const [mensaje, setMensaje] = useState('');
  const [notas, setNotas] = useState([]);

  // Funcion si se hace submit
  function Submit(e) {
    console.log('Se hizo submit');
    e.preventDefault();
    // Obtenemos los valores actuales de los inputs
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const important = importantRef.current.checked;
    
    // Validamos que los campos no esten vacios
    if (title.trim() === '') {
      setMensaje('Campos vacios');

      setTimeout(() => {
          setMensaje('');
      }, 3000);

      return
    }
    if(description.trim() === ''){
      setMensaje('Campos vacios');

      setTimeout(() => {
          setMensaje('');
      }, 3000);

      return
    }

    // Creamos un nota nueva
    const nuevaNota = {
      title: title, 
      description: description, 
      important: important 
    };

    // Agregamos la nueva nota al estado de notas
    setNotas([...notas, nuevaNota]);
    alert('Nota registrada correctamente')

    // Limpiamos los valores de los inputs
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    importantRef.current.checked = false;
  };
  
  console.log(notas);

  // Funcion para eliminar una nota por su titulo
  function EliminarNota(title) {
    // Se filtra para solo excluir la nota con el tituto proporcionado
    const nuevasNotas = notas.filter(n => n.title !== title);
    setNotas(nuevasNotas);
    alert('Nota eliminada correctamente');
  }

  return (
    <div className='container'>
      <h1>Post It Simulator!</h1>
      <div className='contenedorForm'>
        <form onSubmit={Submit}>
          <input className='inputTexto' type="text" placeholder="Titulo" ref={titleRef}/>
          <input className='inputTexto' type="text" placeholder="Descripcion" ref={descriptionRef}/>
          <div className="important-checkbox">
            <input className="checkbox" type="checkbox" ref={importantRef} />
            <label>Importante!</label>
          </div>
          <button className="btn btn-primary" type="submit">Agregar</button>
        </form>
      </div>
      {/* Mensaje de campo vacio */}
      <div className='mensajeAlert' role="alert" hidden={!mensaje}>
        {mensaje}
      </div>
      <div id="notes-container">
        {/* Recorremos cada nota de notas, a cada nota le creamos el componente main, pasandole a main los detalles de lanota,
         una key unica que seria el indice de la nota y la funcion para eliminarnota */}
        {notas.map((nota, indice) => (
          <Main nota={nota} key={indice} EliminarNota={EliminarNota} />
        ))}
      </div>
    </div>
  );
};

export default Header;