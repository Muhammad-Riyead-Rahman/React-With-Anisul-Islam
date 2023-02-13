import BookList from "./components/Hooks/useState/USESTATE_ARRAY/BookList"
import USESTATE_OBJECT from "./components/Hooks/useState/USESTATE_OBJECT"
import HOOKS_USESTATE from "./components/Hooks/useState/USESTATE_BASIC"

function App() {
  return (
    <div>
      <HOOKS_USESTATE />
      <USESTATE_OBJECT />
      <BookList />
    </div>
  )
}

export default App;