import { v4 as uuidv4 } from 'uuid';
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
  return (
    <div>
      <h1 className='headingStyle largeText'>Todo App</h1>
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



