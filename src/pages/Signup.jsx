import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import url from "../config";
const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
const handleSubmit=async (e)=>{
e.preventDefault()
try {
    const response = await axios.post(`${url.URL_BASE}/auth/signup`, {
      email,
      password,
    });
    if (response.status === 201) {
        navigate("/login");
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
        <button className="button"  type="submit">Register</button>
      </form>
      <div className="error-message">
        <p>{errorMessage && errorMessage}</p>
      </div>
      <div>
        <p>
          Already registered? <Link to={"/login"}>Login</Link>
        </p>
      </div>
</div>
  )
}

export default Signup
