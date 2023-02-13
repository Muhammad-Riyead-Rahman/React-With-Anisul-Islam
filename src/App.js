import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const error = true;

  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
    console.log(name);

    // if (name.length < 2) {
    //   setValidInput(false);
    // } else {
    //   setValidInput(true);
    // }

  }
  
  return (
    <div>
      <h1 style={{ color: error ? "red" : "green", backgroundColor: error ? "green" : "red" }}>Welcome</h1>
      <input type="text" value={name} onChange={handleChange} style={{ backgroundColor: validInput ? "green" : "red" }} className={`${validInput ? "valid" : "invalid"}`} />
    </div>
  )
}

export default App;