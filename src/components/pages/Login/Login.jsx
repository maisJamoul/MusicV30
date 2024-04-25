import {useState} from 'react'
import './Login.css';
const Login = () => {
    const [username,setUsername]=useState();
    const [passsword,setPassword]=useState();
  return (
    <>
    <div className="row mx-0 login bg-danger">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
            <div className=" h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-dark fw-bolder">My Music</h1>
                <form  className="d-flex flex-column ">
                    <input type="text" 
                    className="m-2 p-2 border rounded"
                    autoComplete="username" 
                    placeholder="username" 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)} 
                    />
                    <input type="text" 
                    className="m-2 p-2 border rounded"    
                    placeholder="password" 
                    value={passsword}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className="m-2 p-2 btn btn-dark fw-bolder text-danger">
                        Log In
                    </button>
                </form>
            </div>
        </div>
        <div className="col-md-3"></div>
    </div>
      
    </>
  )
}

export default Login
