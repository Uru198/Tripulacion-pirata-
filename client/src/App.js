import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodosPiratas from './Componente/TodosPiratas';
import NuevoPirata from './Componente/NuevoPirata';
import Pirata from './Componente/VerPirata';
import ActualizarPirata from './Componente/EditarPirata';
import { Register } from './Componente/RegistroPirata';



const App = () => {
  return (

    <dvi className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <TodosPiratas/>}/>
          <Route path="/nuevo" exact render={() => <NuevoPirata/>}/>
          <Route path="/pirata/ver/:id" exact render={() => <Pirata/>}/>
          <Route path="/pirata/editar/:id" exact render={() => <ActualizarPirata/>}/>
          <Route path="/pirata/registro"  render={() => <Register/>}/>
        </Switch>
      </BrowserRouter>

    </dvi>

  );
}

export default App;
