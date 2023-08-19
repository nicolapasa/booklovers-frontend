import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import url from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faEdit,
    faTrash,
    faSpinner
  } from "@fortawesome/free-solid-svg-icons";
  import { AuthContext } from "../context/auth.context";


const DetailsBook = () => {
    const navigate=useNavigate()
    const {  user } = useContext(AuthContext);
 const {id}  = useParams('id')


 const [book, setBook] = useState('')



const getBook=async()=>{

    const response=await axios.get(`${url.URL_BASE}/api/book/${id}`)
    setBook(response.data.book)

}

useEffect(() => {
    

    getBook()
}, [id])



const handleDelete =async(id)=>{
    try {
        const response=await axios.delete(`${url.URL_BASE}/api/book/${id}`)
        console.log(response)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
   
}

if (!book) {
    return <FontAwesomeIcon icon={faSpinner} />
  } else {
    return (

    <div className="content-page">
     <div className="left">
     <img src={book.image} alt="" />
    <h3>{book.title}</h3>
    <h4>{book.author}</h4>
    <div className="socialContainer">   <button className="buttonIcon"> <FontAwesomeIcon icon={faHeart}  /></button>
    {
        user._id === book.owner &&    
        <>
        <Link className="buttonIcon" to={`/editBook/${book._id}`}> <FontAwesomeIcon icon={faEdit} /></Link>  
          <button className="buttonIcon"> <FontAwesomeIcon icon={faTrash}  onClick={()=>handleDelete(book._id)} /></button>  
          </>
    } 
 </div>
        </div>   
      <div className="right">
      <p>
        {  book.plot.charAt(0).toUpperCase() +book.plot.slice(1)}
    </p>
          <img src="/images/bg2.png" alt="" />
      </div>

    </div>
  )
}
}
export default DetailsBook
