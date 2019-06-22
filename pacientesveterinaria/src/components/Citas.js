import React from 'react';

const Citas = ({cita}) => {
    return(
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">
                    {cita.mascota}
                </h3>
            </div>
        </div>
    );
}

export default Citas;