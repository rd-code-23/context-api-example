import './App.css';
import Nav from './Nav'
import MovieList from './MovieList'
import {MovieProvider} from './MovieContext.jsx'
import AddMovie from './AddMovie.jsx'
function App() {
  return (
    <MovieProvider >
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />

      </div>   
    </MovieProvider>
  );
}

export default App;
