import React from 'react';
import Main from './main';

function Header() {
  // Funcion si se hace submit
  function Submit(e) {
    console.log('Se hizo submit');
    e.preventDefault();
    };

  return (
    <div>
      <h1>Post It Simulator!</h1>
      <form onSubmit={Submit}>
        <input type="text" placeholder="Titulo"/>
        <input type="text" placeholder="Descripcion"/>
        <input type="checkbox"/>
        <label>Important</label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Header;