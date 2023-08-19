import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import url from "../config";
import { useNavigate, useParams } from "react-router-dom";
const EditBook = () => {
    const {id}=useParams('id')
const navigate=useNavigate()
  const {  user } = useContext(AuthContext);
    const [title, setTitle] = useState('')
    const [plot, setPlot] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [owner, setOwner] = useState(user._id);
    const [isDisabled, setIsDisabled] = useState(false);

const getOneBook=async()=> {
    const response=await axios.get(`${url.URL_BASE}/api/book/${id}`)
    setTitle(response.data.book.title)
    setPlot(response.data.book.plot)
    setAuthor(response.data.book.author)

} 
useEffect(() => {
    getOneBook();
  }, []);


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
  const response = await axios.put(`${url.URL_BASE}/api/book/${id}`, formData);
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="formInput"
            />
            <label htmlFor="author">Author:</label>
            <input
              required
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="formInput"
            />
       <label htmlFor="author">Plot:</label>
            <textarea
              required
              type="text"
              name="plot"
              value={plot}
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
     
            <button className="button"  type="submit">Update</button>
          </form>
          <div className="error-message">
            <p>{errorMessage && errorMessage}</p>
          </div>
    </div>
  )
}

export default EditBook
