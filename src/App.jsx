import { Link, Outlet } from "react-router-dom"
import "./styles/app.sass"

function App() {


  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">MovieLib</Link>
        </h2>
        <Link to="/movie/1">MovieLib</Link>
        <Link to="/search">MovieLib</Link>
      </nav>
      <h2>MoviesLib</h2>
      <Outlet />
      
    </div>
  )
}

export default App
