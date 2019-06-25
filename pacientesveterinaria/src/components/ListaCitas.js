import React from "react";
import Cita from './Citas';
import PropTypes from 'prop-types';

const ListaCitas = ({ citas, elimanarCitas }) => {
 return(
    <div className="card mt-2 py-5">
    <div className="card-body">
      <h2 className="card-title text-center">
          Administra las citas aquí
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
