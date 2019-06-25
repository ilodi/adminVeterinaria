import React, { Component } from 'react';
import "./bootstrap.min.css";
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  };
  //Local storage
  //Cuando la aplicación carga
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        //De json a string
        citas: JSON.parse(citasLS)
      })
    }
  }
  //Cuando elimanos o agregamos //Cuando se hace una modificacion
  componentWillUpdate(){
    //Convierte el arreglo en Json
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    //copiar el state actual || Esto es como un push
    const citas = [...this.state.citas, datos];
    //agregar el nuevo state
    this.setState({
      //como se llaman igual no se tiene que escribir de nuevo citas: citas
      citas
    });
  };

  //elimina las citas del state
  elimanarCitas = id => {
    //Para borrar nunca se mura el state son no se hace una copea
    const citasActuales = [...this.state.citas];
    //Y despues ultilizar filter para sacar el elemento @ del arreglo
    //cita es cada objeto y con el arrow apunta a ese valor del arreglo y con el triple lo compara en la nueva copia
    //y para borrar es negar que sea diferente al id
    const citas = citasActuales.filter(cita => cita.id !== id);
    //actualizar el state
    this.setState({
      citas
    });
  };

  render() {
    return (
      <div className="container">
        <Header title="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas citas={this.state.citas}
              elimanarCitas={this.elimanarCitas} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
