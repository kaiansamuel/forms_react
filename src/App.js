import './App.css';
import Myform from './components/Myform';

function App() {
  return (
    <div className='App'>
      <h2>Forms</h2>
      <Myform user={{ name: "Josias", email: "josias@rmail.com"}}/>
    </div>
  );
}

export default App;
