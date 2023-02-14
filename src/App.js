import Card from "./components/card";
import "./index.css";
import data from "./data.json";

function App() {
  console.log(data);
  console.log(data[0].title + " " + data[0].desc);

  // let items = [];

  /* // using for loop
  for (let x = 0; x < data.length; x++) {
    items.push(<Card titleText={data[x].title} descText={data[x].desc} />)
  } */

  // items = data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} />)

  return <div>
    <h1 className='headingStyle largeText'>Todo App</h1>

    {/* <Card titleText={data[0].title} descText={data[0].desc} />
    <Card titleText={data[1].title} descText={data[1].desc} />
    <Card titleText={data[2].title} descText={data[2].desc} />
    <Card titleText={data[3].title} descText={data[3].desc} /> */}

    {/* {items} */}

    {data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} />)}
  </div>
}

export default App;



