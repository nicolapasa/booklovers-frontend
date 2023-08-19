
import { Link } from "react-router-dom";
import ButtonLike from "./ButtonLike";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import url from "../config";
const BookCard = ({book, handleLikeButton}) => {
  const {  user } = useContext(AuthContext);
const [likes, setLikes] = useState([])
 const getLikes=async ()=>{

       const response=await axios.get(`${url.URL_BASE}/api/like/${book._id}`)
       setLikes(response.data.likes)

      
 }

useEffect(() => {
  getLikes()
}, [])


  return (
  
      <>
 <div className="bookCard" key={crypto.randomUUID()}>
    <img src={book.image} alt="" />
    <h3>{book.title}</h3>
    <h4>{book.author}</h4>
  
    <div className="socialContainer">
    {
      
        user &&  <> <ButtonLike userid={user._id} bookId={book._id} handleLikeButton={handleLikeButton} likes={likes.length} />    <Link className="link" to={`/bookDetails/${book._id}`}  >Details</Link></> 
    }  

    </div>
</div>
</>

  )
}

export default BookCard
