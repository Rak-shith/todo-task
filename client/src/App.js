import './App.css';
import axios from 'axios';

function App() {

  axios.get('http://localhost:5000/todos')
  .then((resp) => console.log(resp))
  .then((err) => console.log(err));

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
