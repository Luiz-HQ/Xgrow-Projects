import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <header>
            <nav className='navBar'>
                <h2><Link className='listItens' id='title' to="/">Blog K-12</Link></h2>
                <ul className='containerItens'>    
                    <li><Link className='listItensRight' id='posts' to="/">Posts</Link></li>
                    <li><Link className='listItensRight' id='login' to="/login">Login</Link></li>
                    <li><Link className='listItensRight' id='register' to="/register">Registre-se</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
