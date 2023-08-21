import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import url from "../config";

const ChangePassword = () => {
    const navigate=useNavigate()
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { user, authenticateUser } = useContext(AuthContext);
const handleSubmit=async(e)=>{

    e.preventDefault()
    try {
        const response = await axios.post(`${url.URL_BASE}/auth/changePassword/${user._id}`, {
            newPassword,
            confirmPassword
          });
        if (response.status === 201) {
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
     
            <label htmlFor="password">New Password:</label>
            <input
              required
              type="password"
              name="new_password"
              className="formInput"
              onChange={(e) => setNewPassword(e.target.value)}
            />
             <label htmlFor="password">Confirm Password:</label>
            <input
              required
              type="password"
              name="confirm_password"
              className="formInput"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="button"  type="submit">Update</button>
          </form>
          <div className="error-message">
            <p>{errorMessage && errorMessage}</p>
          </div>
          <div>
            <img src="/images/bg.png"  />
          </div>
    </div>
  )
}

export default ChangePassword
