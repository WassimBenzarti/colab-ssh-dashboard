import './App.css';
import PrivateKeyCreator from "./components/PrivateKeyCreator"

function App() {
  return (
    <div className="App">
      <h1 style={{
        fontWeight:"bold"
      }}>Colab-ssh dasboard</h1>
      <PrivateKeyCreator/>
      

    </div>
  );
}

export default App;
