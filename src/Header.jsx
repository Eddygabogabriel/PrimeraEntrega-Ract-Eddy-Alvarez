import CartWidget from "./CartWidget"

function Header() {
  return (

    <nav className="nav">
        <ul className="nav-list-container">
            <li className="nav-list nav-list-main-img"><img src="../image/logo_sin_fondo.png" className="nav-list-logo"/></li>
            <li className="nav-list"><a href="">Inicio</a></li>
            <li className="nav-list"> <a href="">Productos</a></li>
            <li className="nav-list"><a href="">Contactos</a></li> 
            <li className="nav-list"></li>
            <li className="nav-list"><CartWidget/></li>
            
            
        </ul>
        
    </nav>
  
   
  )
}

export default Header
