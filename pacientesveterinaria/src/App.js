import React, {Component} from 'react';
import './bootstrap.min.css'
import Header from './conponents/Header'
import NuevaCita from './conponents/NuevaCita'

class App extends Component{
  state ={

  }
  render(){
    return( 
      <div className="container">
        <Header title='Administrador Pacientes Veterinaria' />
        <div className="row">
        <div className="col-md-10 mx-auto">
          <NuevaCita/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
