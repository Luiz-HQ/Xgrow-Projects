import { Link } from "react-router-dom";  
import './Register.css'

function Register() {
    return(
    <>
        <main>    
            <form className="register">
            
                        
                <h2>Registre-se</h2>
                <p className="title" >Já tem uma conta? <Link className="title_link" to="/login">Faça login</Link> </p>
                
                <label className="labelName">Nome</label>
                <input className="label" type="text" name="name" id="name" placeholder="Nome..." />
                <label className="labelName">Email:</label>
                <input className="label" type="email" name="email" id="email" placeholder="Email..." />
                <label className="labelName">Senha:</label>
                <input className="label" type="password" name="password" id="password" placeholder="Senha..." />

                <button className="button">Registrar</button>
            </form>
        </main>
    </>
    )
}

export default Register;