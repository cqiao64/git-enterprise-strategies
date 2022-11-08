import logo from './logo.svg'; // Your teammate's logo import
import gatorLogo from './gator.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! This is our team project.
        </p>
        <img src={gatorLogo} className="App-logo" alt="gator logo" />
        <p> Hello World! </p>
        <p> My name is Christopher Qiao and this is my project </p>
      </header>
    </div>
  );
}

export default App;
