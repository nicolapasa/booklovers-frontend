import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import url from "../config";
const Login = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { authenticateUser, storeToken } = useContext(AuthContext);
const handleSubmit=async(e)=>{
e.preventDefault()
try {
    const response = await axios.post(`${url.URL_BASE}/auth/login`, {
        email,
        password,
      });
    if (response.status === 202) {
      storeToken(response.data.token);
      authenticateUser();
      navigate("/");
    } else {
      setErrorMessage(response.data.message);
    }
  } catch (error) {
    setErrorMessage(error.response.data.message);
  }
}

  return (
    <div className="content">
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="email">Email:</label>
            <input
              required
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="formInput"
            />
            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              name="password"
              className="formInput"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button"  type="submit">Sign in!</button>
          </form>
          <div className="error-message">
            <p>{errorMessage && errorMessage}</p>
          </div>
          <div>
            <img src="/images/bg4.png"  />
            <p>
              Not registered? <Link className="link" to={"/signup"}>Sign Up</Link>
            </p>
          </div>
    </div>
  )
}

export default Login
