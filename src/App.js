import logo from './logo.svg';
import './App.css';
import Test1 from './Test1';
import Greet from './Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet data={["apple","pear", "mango"]}/>
        
      </header>
    </div>
  );
}

export default App;
