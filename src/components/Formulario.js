import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearTarea}) => {

    // Crear State de Tareas
    const [tarea, actualizarTarea] = useState({
        nombre: '',
        descripcion: '',
    });
    const [ error, actualizarError ] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarTarea({
            ...tarea,
            [e.target.name]: e.target.value 
        })
    }

    // Extraer los valores
    const { nombre, descripcion } = tarea;

    // Cuando el usuario presiona agregar tarea
    const submitTarea = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === ''  || descripcion.trim() === '' ){
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo 
        actualizarError(false);

        // Asignar un ID
        tarea.id = uuid();

        // Crear la tarea
        crearTarea(tarea);

        // Reiniciar el form
        actualizarTarea({
            nombre: '',
            descripcion: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Tarea</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitTarea}
            >
                <label>Nombre de la Tarea</label>
                <input 
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre de la tarea"
                    onChange={actualizarState}
                    value={nombre}
                />
                <label>Descripcion</label>
                <textarea
                    className="u-full-width"
                    name="descripcion"
                    onChange={actualizarState}
                    value={descripcion}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Tarea</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearTarea: PropTypes.func.isRequired
}
 
export default Formulario;