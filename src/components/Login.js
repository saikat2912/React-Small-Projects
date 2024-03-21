import React,{useState} from "react";
import './style.css'

export default function Login(){
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    return(
        <>
        <div className="main">
        <div className="navbar">
                <ul className="nav-links">
                    <li><a link="#">Home</a></li>
                    <li><a link="#">About</a></li>
                    <li><a link="#">Services</a></li>
                    <li><a link="#">Contact Us</a></li>
                </ul>
            </div>

        <div className="body">
        <div className="card">
            
            </div> 
        <div className="full-page">
            
            <div className="container">
                <div className="login-form">
                    <label className="login-label">Name</label>
                    <input type="text" className="login-input" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <label className="login-label">Password</label>
                    <input type="password" className="login-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}