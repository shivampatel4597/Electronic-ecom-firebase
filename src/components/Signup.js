import { React, useState } from "react";
import {app} from "./Config";
import {getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


import "../singup.css";
const Signup = () => {
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    const storage = getStorage(app);
//   const history = useHistory();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(fullname, email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await addDoc(collection(firestore, "users"), {
        fullName: fullname,
        email: email,
        password: password
        // Add other user data here if needed
      });
      alert("User signed up successfully!");
      setFullName("");
      setEmail("");
      setPassword("");
      setSuccessMsg("User signed up successfully!");
    //   history.push('/login')
      // Redirect the user or show a success message here
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up:", errorCode, errorMessage);
      setErrorMsg(errorMessage);
    }
  };
  
  return (
    <>
      <h1>Sign Up page</h1>
     
{successMsg &&<div>{successMsg}</div>} 
      <div className="container">
        <form action="" autoComplete="off" onSubmit={handleSignup}>
          <div className="dis">
            <label htmlFor="">Full Name</label>
            <br />
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullname}
              type="text"
              required
            />
            <br />
          </div>

          <div className="dis">
            <label htmlFor="">Email</label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
            />
            <br />
          </div>

          <div className="dis">
            <label htmlFor="">Password</label>
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required
            />
            <br />
          </div>

          <div className="btn-box">
            <span>
              Already have account <Link to="/login">Here</Link>
            </span>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
      {errormsg&&<div>{errormsg}</div>}
    </>
  );
};

export default Signup;
