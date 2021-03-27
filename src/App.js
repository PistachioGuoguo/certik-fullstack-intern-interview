import './App.css';
import Right from './Right.js';
import useFetch from './useFetch';
import Left from './Left.js';

function App() {

  // read data from url (currently in json-server)
  const testUrl = 'http://localhost:8000/primitives';
  const indicators = useFetch(testUrl)['data'];

  return (
    <div className="App">

      <div className="left">
        { indicators && <Left indicators={indicators} />}
      </div>

      <div className="right">
        { indicators && <Right indicators={indicators} />} 
      </div>

    </div>
  );
}

export default App;
