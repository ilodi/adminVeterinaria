import React, { Component } from "react";
//Genera un nmero identificador cuando no usas una db
import uuid from 'uuid';

//
const stateInicial = {
    cita: {
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
      },
      error: false
}
class NuevaCita extends Component {
  state = { ...stateInicial };
  //Cuando el usuario escribe en los input
  handleChange = e => {
    // console.log(`${e.target.name} : ${e.target.value}`);
    //colar lo que el usuario escribe en el state
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };
  //Cuando el usuario manda el formulario
  handleSubmit = e => {
    e.preventDefault();
    //Extraer los valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    //Validar que todos los campos esten llenos
    if(mascota === '' || propietario === '' || fecha === ''|| hora === '' || sintomas === ''){
        this.setState({
            error: true
        })
        //Detemer la ejecición con un return 
        return
    }
    //generar objeto con los datos haciendo unso de una copia
    const nuevaCita ={...this.state.cita};
    nuevaCita.id = uuid();
    //Agregar la cita al state de App
    this.props.crearNuevaCita(nuevaCita);



    /////Colocar en el state el State Inicial
    this.setState({
        ...stateInicial
    })
  };
  render() {
      //Extraer el valor del state
      const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>
          {error? <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos Los campos son necesario
          </div> :null}
          <form onSubmit={this.handleSubmit}>
            <div className="from-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>

            {/* Formend */}
            <div className="from-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño Mascota"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>

            {/* Formend */}
            <div className="from-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>

            {/* Formend */}
            <div className="from-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Describe los síntomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                />
              </div>
            </div>

            {/* Formend */}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
