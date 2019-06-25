import React from "react";
import Cita from './Citas';
import PropTypes from 'prop-types';

const ListaCitas = ({ citas, elimanarCitas }) => {

  //Imprimir mensaje si hay citas o no
  const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí' ;

 return(
    <div className="card mt-2 py-5">
    <div className="card-body">
      <h2 className="card-title text-center">
         {mensaje}
      </h2>
      <div className="lista-citas">
        { citas.map(cita => (
            <Cita 
            key={cita.id} 
            cita={cita}
            elimanarCitas={elimanarCitas}/>
        )) }
      </div>
    </div>
  </div>
 );
};

ListaCitas.prototype = {
  citas : PropTypes.array.isRequired,
  elimanarCitas : PropTypes.func.isRequired
}
export default ListaCitas;
