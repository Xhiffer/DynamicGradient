import GradUnitaire from './components/GradUnitaire';
import AddGradUnitaire from './components/AddGradUnitaire';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="display-1">Gradient Generator</h1>
      <div className="container">
        <div className="row">
          <GradUnitaire/>
          <AddGradUnitaire/>
        </div>
      </div>
    </div>
  );
}

export default App;
