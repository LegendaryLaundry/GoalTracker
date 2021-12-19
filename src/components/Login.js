import React from "react";
import { Link } from 'react-router-dom';

function Login(){
    const incomePage = () => {
        <Link to="/income"></Link>
    }
    return(
        <div class = "formElements">
        <h2 >Welcome! Please login.</h2>
        <span id = "FactsPage"></span>
        <form>
        <div id="buttons" className="loginButtons">
        <input type="text" id="emailInput" name="email" placeholder="Email Address"></input>
        </div>
    
    
        <div class = "passwordInput" >
        <input type="password" id="passwordInput" name="password" placeholder="Password"></input>
        </div>
    
        <div><button class= "revolvingButton" onClick = "incomePage()">Login To Account</button>
        </div>
        </form>
    
    
        </div>

        
    )
}

export default Login;