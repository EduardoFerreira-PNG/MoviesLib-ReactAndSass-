import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


import "./styles/app.sass"

function App() {


  return (
    <div className="App">
      <Navbar />
      <h2>MoviesLib</h2>
      <Outlet />
      
    </div>
  )
}

export default App
