import { useContext, useState } from "react"
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import url from "../config";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
const navigate=useNavigate()
  const {  user } = useContext(AuthContext);
    const [title, setTitle] = useState('')
    const [plot, setPlot] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [owner, setOwner] = useState(user._id);
    const [isDisabled, setIsDisabled] = useState(false);
const handleSubmit=async(e)=>{
e.preventDefault()

setIsDisabled(true);
const formData = new FormData();
formData.append("title", title);
formData.append("author", author);
formData.append("plot", plot);
formData.append("owner", owner);
formData.append("image", image);

try {
  const response = await axios.post(`${url.URL_BASE}/api/book/new`, formData);
  if (response.status === 201) {
           navigate('/')
  
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
            <label htmlFor="title">Title:</label>
            <input
              required
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="formInput"
            />
            <label htmlFor="author">Author:</label>
            <input
              required
              type="text"
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
              className="formInput"
            />
       <label htmlFor="author">Plot:</label>
            <textarea
              required
              type="text"
              name="plot"
              onChange={(e) => setPlot(e.target.value)}
              className="formInput"
            >
              </textarea>
              <label htmlFor="image">
              Image:</label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
                name="image"
              />
     
            <button className="button"  type="submit">Save</button>
          </form>
          <div className="error-message">
            <p>{errorMessage && errorMessage}</p>
          </div>
    </div>
  )
}

export default AddBook
