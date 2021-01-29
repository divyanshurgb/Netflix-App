import './App.css';
import Row from './Row';
import requests from './Requests';

function App() {
  return (
    <div className="App">
      <h1>Hey DIVI! Let's build netflix clone frontend today</h1>
      <Row title="NEW MOVIES" fetchUrl={requests.fetchNewMovies} />
      <Row title="POPULAR MOVIES" fetchUrl={requests.fetchPopularMovies}/>
      
    </div>
  );
}

export default App;
