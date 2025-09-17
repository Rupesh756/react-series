import { useState } from "react"

const LoginForm = () => {
    const [username, setusername]=useState("");
    const [password, setpassword]=useState("");



    const handleFormSubmit =(e)=>{
        e.preventDefault();

        const loginData={
            username,
            password,
        }
        console.log(loginData)
    }
  return (
    <div>
      <div>
        <h1>Login Form </h1>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">UserName</label>
            <input type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input type="password"
            name="password"
            required
            autoComplete="off"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
