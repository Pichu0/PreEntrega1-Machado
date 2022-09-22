import React from 'react'
import{Link} from 'react-router-dom'
import CartWidget from '../paginas/CartWidget'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link to='/'>
                    <img src='./logo-yes.png' width='50'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto bg-light">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/yes'>Yes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/items'>Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/carrito'><CartWidget/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar