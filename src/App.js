import logo from './logo.svg';
import './App.css';
import Test from './Example/reacteg';
import Propscomp from './Example/propscomp';
import Myfunction from './functionalcomp';


function App() {
  return (
    <div className="App">
      <Test/>
      <Propscomp name=" KEC"/>
      <Myfunction name="Sakthivel"/>
      <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
