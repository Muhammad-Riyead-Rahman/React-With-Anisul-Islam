import Card from "./components/card";
import "./index.css";

function App() {
  return <div>
    <h1 className='headingStyle largeText'>Todo App</h1>
    <Card titleText="Call Mother" descText="This is desc1" />
    <Card titleText="Call Father" descText="This is desc2" />
    <Card titleText="Call Sister" descText="This is desc3" />
    <Card titleText="Call Home" descText="This is desc4" />
  </div>
}

export default App;