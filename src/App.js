import { v4 as uuidv4 } from 'uuid';
import Card from "./components/card";
import data from "./data.json";
import "./index.css";


const todos = [
  {
    id: uuidv4(),
    title: "todo1",
    desc: "todo1 description",
    phones: [
      { home: "0172564552" },
      { office: "2555558525" }
    ]
  },
  {
    id: uuidv4(),
    title: "todo2",
    desc: "todo2 description",
    phones: [
      { home: "0172564552" },
      { office: "2555558525" }
    ]
  },
  {
    id: uuidv4(),
    title: "todo3",
    desc: "todo3 description",
    phones: [
      { home: "0172564552" },
      { office: "2555558525" }
    ]
  },
  {
    id: uuidv4(),
    title: "todo4",
    desc: "todo4 description",
    phones: [
      { home: "0172564552" },
      { office: "2555558525" }
    ]
  }
]

function App() {
  console.log(data[0].title);
  let items = [];

  /* // using for loop
  for (let x = 0; x < data.length; x++) {
    items.push(<Card titleText={data[x].title} descText={data[x].desc} />)
  } */

  items = data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} />)

  return (
    <div>
      <h1 className='headingStyle largeText'>Todo App</h1>

      {/* <Card titleText={data[0].title} descText={data[0].desc} />
    <Card titleText={data[1].title} descText={data[1].desc} />
    <Card titleText={data[2].title} descText={data[2].desc} />
    <Card titleText={data[3].title} descText={data[3].desc} /> */}

      {items}

      {todos.map((todo) => {
        console.log(todo)
        const { id, title, desc, phones } = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
            {todo.phones.map((phone, index) => {
              const { home, office } = phone;
              return (
                <div key={index}>
                  <p>Home: {home}</p>
                  <p>office: {office}</p>
                </div>
              )
            })}
          </div>
        )
      })}

      {todos.map((todo) => {
        console.log(todo)
        const { id, title, desc, phones } = todo;
        console.log(phones)
        const [{ home }, { office }] = phones;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>home: {home}</p>
            <p>office: {office}</p>
          </div>
        )
      })}
    </div>)
}

export default App;



