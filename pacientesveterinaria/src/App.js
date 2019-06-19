import React, {Component} from 'react';
import './bootstrap.min.css'
import Header from './conponents/Header'
import NuevaCita from './conponents/NuevaCita'

class App extends Component{
  state ={
    citas:[]
  }
  crearNuevaCita = datos =>{
    //copiar el stat actual || Esto es como un push
    const citas = [...this.state.citas, datos];
    //agregar el nuevo state
    this.setState({
      //como se llaman igual no se tiene que escribir de nuevo citas: citas
      citas
    })

  }
  render(){
    return( 
      <div className="container">
        <Header title='Administrador Pacientes Veterinaria' />
        <div className="row">
        <div className="col-md-10 mx-auto">
          <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
