import './App.css';
import './Right.js';
import Right from './Right.js';
import useFetch from './useFetch';

function App() {

  const testUrl = 'http://localhost:8000/primitives';

  const indicators = useFetch(testUrl)['data'];

  return (
    <div className="App">
         { indicators && <Right indicators={indicators} />} 
    </div>
  );
}

export default App;
