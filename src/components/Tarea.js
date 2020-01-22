import React from 'react';
import PropTypes from 'prop-types';


const Tarea = ({tarea, eliminarTarea}) => ( 
    <div className="tarea">
        <p>Nombre: <span>{tarea.nombre}</span> </p>
        <p>Descripcion: <span>{tarea.descripcion}</span> </p>
        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarTarea(tarea.id) }
        >Eliminar &times;</button>
    </div>
);

Tarea.propTypes = {
    tarea: PropTypes.object.isRequired,
    eliminarTarea: PropTypes.func.isRequired
}
 
export default Tarea;