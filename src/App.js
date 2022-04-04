
import './App.css';
import CounterComp from './components/CounterComp';

import { Todos } from './components/Todos';



function App() {

  return (
    <div className="App">

    <CounterComp />
    <hr/>
      <Todos />
    </div>
  );
}

export default App;
