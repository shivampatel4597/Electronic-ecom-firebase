import {React, useState} from 'react'
import {useHis}
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from './Config'
const Login = () => {
const auth = getAuth(app)
    const[email, setEmail] = useState('')
const[password, setPassword] = useState('')
const[errormsg, setErrorMsg] = useState('');
const[successMsg, setSuccessMsg] = useState('')

const handleLogin = async(e)=>{
    e.preventDefault();
    console.log(email,password)
    try{
      await signInWithEmailAndPassword(auth,email,password);
      alert("User Login successfully!");
      setEmail("");
      setPassword("");
      setSuccessMsg("User Login successfully!");


    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
        setErrorMsg(errorMessage);
      }
    
}
  return (
    <>
    <h1>Login page</h1>
    {successMsg &&<div>{successMsg}</div>} 
  <div className="container">
    <form action="" autoComplete="off" onSubmit={handleLogin}>
       

<div className="dis">
<label htmlFor="">Email</label><br/>
<input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required /><br/>
</div>


    <div className="dis">
    <label htmlFor="">Password</label><br/>
<input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" required /><br/>
    </div>


   <div className="btn-box">
    <span>Don't have an account <Link to='/signup'>Here</Link></span>
    <button type="submit">Log in</button>
    </div> 
    
    </form>
  </div>
  {errormsg&&<div>{errormsg}</div>}
  </>
  )
}

export default Login
