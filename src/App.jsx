import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import { Main } from "./Components/Main/Main"
import { Home } from "./Components/Pages/Home/Home"
function App() {


  return (
   
      <Home>
        <Header/>
        <hr className="bg-black h-1"/>
        <Main/>
        <hr className="bg-black h-1"/>
        <Footer/>
      </Home>     
   
  )
}

export default App
