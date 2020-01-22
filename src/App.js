import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Tarea from './components/Tarea';

function App() {

  // tareas en local storage
  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
  if(!tareasIniciales) {
    tareasIniciales = [];
  }

  // Arreglo de tareas
  const [tareas, guardarTareas] = useState(tareasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
      let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));

      if(tareasIniciales) {
        localStorage.setItem('tareas', JSON.stringify(tareas))
      } else {
        localStorage.setItem('tareas', JSON.stringify([]));
      }
  }, [tareas] );

  // Función que tome las tareas actuales y agregue la nueva
  const crearTarea = tarea => {
    guardarTareas([ ...tareas, tarea ]);
  }

  // Función que elimina una tarea por su id
  const eliminarTarea = id => {
      console.log(id);
     const nuevasTareas = tareas.filter(tarea => tarea.id !== id );
     guardarTareas(nuevasTareas);
  }

  // Mensaje condicional
  const titulo = tareas.length === 0 ? 'No hay tareas' : 'Administra tus Tareas';

  return (
    <Fragment>
      <h1>Administrador de Tareas</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
                crearTarea={crearTarea}
              />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {tareas.map(tarea => (
                <Tarea
                  key={tarea.id}
                  tarea={tarea}
                  eliminarTarea={eliminarTarea}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
