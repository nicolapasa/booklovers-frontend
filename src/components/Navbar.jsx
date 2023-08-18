import { Link } from "react-router-dom"
import bookLogo from '/images/logo.png';
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

export const Navbar = () => {
    const { isLoggedIn, logoutHandle } = useContext(AuthContext);

    const handleLogout=()=>{
        logoutHandle()
    }
  return (
    <nav className="navbar">
    <div className="brand"><img src={bookLogo} className="logo" alt="Vite logo" /></div>
    <ul className="menu">
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      { isLoggedIn &&     <> 
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li> 
      <li>
     <Link to={'/addBook'}>Add Book</Link>
      </li>
        <li>
        <Link to={'/profile'}>Profile</Link>
         </li>
         </>
      }
      { !isLoggedIn &&      <li>
        <Link to={'/login'}>Login</Link>
      </li>}
      <li>

      </li>
    </ul>
  </nav>
  )
}
