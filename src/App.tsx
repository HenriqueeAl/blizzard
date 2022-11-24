import { Bannerhero } from "./components/bannerhero/bannerhero"
import { Menu } from "./components/menu/menu"
import './global.scss'

function App() {

  return (
    <div className="App">
       <Menu></Menu>
       <Bannerhero></Bannerhero>
    </div>
  )
}

export default App
