import { React, useState } from "react";
import {app} from "./Config";
import {getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";




const Signup = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
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
      navigate("/login"); 
      // Redirect the user or show a success message here
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up:", errorCode, errorMessage);
      setErrorMsg(errorMessage);
    }
  };
  
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-300">
 <div className=" w-3/6 h-[70vh] border-2 rounded-lg bg-red-300 shadow-lg border-black">
      <h1 className="my-3 text-center text-3xl font-bold">Sign Up page</h1>
     
{successMsg &&<div>{successMsg}</div>} 
      <div className="container">
        <form action="" autoComplete="off" onSubmit={handleSignup}>
          <div className="py-2  border-red-400">
            <label className="mx-3 text-xl font-sm font-serif " htmlFor="">Full Name</label>
            <br />
            <input className="px-4 h-8 w-[80%] text-black bg-white  focus:outline-none border-black mx-3 my-2 rounded-md "
              onChange={(e) => setFullName(e.target.value)}
              value={fullname}
              type="text"
              required
            />
            <br />
          </div>

          <div className="py-2 border-2 border-red-400">
            <label className="mx-3 text-xl font-sm font-serif " htmlFor="">Email</label>
            <br />
            <input className="px-4 h-8 w-[80%] bg-white text-black focus:outline-none border-black mx-3 my-2 rounded-md "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
            />
            <br />
          </div>

          <div className="py-2 border-2 border-red-400">
            <label className="mx-3 text-xl font-sm font-serif " htmlFor="">Password</label>
            <br />
            <input className=" px-4 h-8 w-[80%] bg-white text-black  border-black mx-3 my-2 rounded-md focus:outline-none "
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required
            />
            <br />
          </div>

          <div className="py-1 px-3 flex items-center justify-between  border-red-400">
            <span className="text-md ">
              Already have account <Link className=" mx-2 text-white font-medium  hover:text-blue-700 text-lg" to="/login">Here</Link>
            </span>
            <button className=" text-xl text-white px-5 py-2 border rounded-[8px] bg-green-400 hover:text-white hover:bg-black " type="submit">Sign up</button>
          </div>
        </form>
      </div>
      {errormsg&&<div>{errormsg}</div>}
    </div>
    </div>
   
  );
};

export default Signup;
