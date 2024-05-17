import "./Login.css"
import { Link } from "react-router-dom"

function Login() {
    return(
    <main>    
            <form className="login">
            
                        
                <h2>Login</h2>
                <p className="title" >Novo no site? <Link className="title_link" to="/register">Registre-se</Link> </p>
                
                <label className="labelName">Email:</label>
                <input className="label" type="email" name="email" id="email" placeholder="Email..." />
                <label className="labelName">Senha:</label>
                <input className="label" type="password" name="password" id="password" placeholder="Senha..." />

                <button className="loginButton">Login</button>
            </form>
    </main>
    )
}

export default Login;