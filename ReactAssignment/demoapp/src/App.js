import logo from './logo.svg';
import './App.css';
import { Posts } from './Components/Posts';


// https://jsonplaceholder.typicode.com/posts

// https://jsonplaceholder.typicode.com/posts/{id}

// https://jsonplaceholder.typicode.com/posts/{id}/comments
function App() {
  return (
    <div className="App">
    <Posts/>
    </div>
  );
}

export default App;
