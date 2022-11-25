import { Bannerhero } from "./components/bannerhero/bannerhero"
import { Footer } from "./components/footer/footer"
import { Jogosexclusivo } from "./components/jogosexclusivo/jogosexclusivo"
import { Menu } from "./components/menu/menu"
import './global.scss'

function App() {

  return (
    <div className="App">
       <Menu></Menu>
       <Bannerhero></Bannerhero>
       <Jogosexclusivo></Jogosexclusivo>
       <Footer></Footer>
       
    </div>
  )
}

export default App
