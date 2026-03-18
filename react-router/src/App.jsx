import { Outlet,NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/block">
          Block
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
         
      </nav>

      <Outlet/>
    </>
  )
}

export default App
