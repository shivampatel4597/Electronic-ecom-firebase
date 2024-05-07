import { React, useState } from "react";

import { Link, useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./Config";
const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate(); // Initialize useHistory
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User Login successfully!");
      setEmail("");
      setPassword("");
      setSuccessMsg("User Login successfully!");
      navigate("/"); 
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up:", errorCode, errorMessage);
      setErrorMsg(errorMessage);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-300">
<div className="w-3/6 h-[70vh] border-2 rounded-lg bg-red-300 shadow-lg border-black">
      <h1 className="my-3 text-center text-3xl font-bold">Login page</h1>
      {successMsg && <div>{successMsg}</div>}
      <div className="container">
        <form  className='text-center' action="" autoComplete="off" onSubmit={handleLogin}>
          <div className="py-2  border-red-400">
            <label className="mx-3 text-xl font-sm font-serif " htmlFor="">Email</label>
            <br />
            <input className="px-4 h-8 w-[80%] text-black bg-white  focus:outline-none border-black mx-3 my-2 rounded-md "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
            />
            <br />
          </div>

          <div className="py-2    border-red-400">
            <label className="mx-3 text-xl font-sm font-serif " htmlFor="">Password</label>
            <br />
            <input className="px-4 h-8 w-[80%] text-black bg-white  focus:outline-none border-black mx-3 my-2 rounded-md "
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required
            />
            <br />
          </div>

          <div className="py-3 px-3 flex flex-col items-center gap-10  border-red-400">
            <span className="text-md">
              Don't have an account <Link className=" mx-2 text-white font-medium  hover:text-blue-700 text-lg" to="/signup">Here</Link>
            </span>
            <button className=" text-xl text-white px-5 py-2 border rounded-[8px] bg-green-400 hover:text-white hover:bg-black " type="submit">
             Log in
            </button>
          </div>
        </form>
      </div>
      {errormsg && <div>{errormsg}</div>}
    </div>
    </div>
    
  );
};

export default Login;
