import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import url from "../config";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const ProfilePage = () => {
const {  user,authenticateUser } = useContext(AuthContext);
const [books, setBooks] = useState([])
const [change, setChange] = useState(false)
const [image, setImage] = useState('')
    const getFavouriteBooks=async()=>{
        const response=await axios.get(`${url.URL_BASE}/api/books/${user._id}`)
      
        setBooks(response.data.likeBooks)
         console.log(response.data.likeBooks)
       }
      
      
        useEffect(() => {
      
            getFavouriteBooks()
          console.log(books)
        }, [])




const handleUpload=async(e)=>{
    e.preventDefault()
    const formData = new FormData();

    formData.append("image", image);


    const response=await axios.post(`${url.URL_BASE}/auth/upload/${user._id}`, formData)
    if(response.status===200){
        authenticateUser()
        window.location.reload(false);

    }
}        

const handleRemoveFavorite=async(id, userid)=>{

    const response=await axios.post(`${url.URL_BASE}/api/book/like/${id}`, {userid})
    console.log(response)
    window.location.reload(false);
  


}





  return (
    <>
    <div className="content-page">
      
    <div className="left">
   
     <div className="picWrapper">
        {  user.image &&        <img src={user.image}  />        }
        {    !user.image && <img src="/images/male.png"  />    }     
           </div>
        
        { !change &&   <button className="link" onClick={()=>setChange(true)}>Change Picture</button>}
        { change &&   <form className="form" onSubmit={handleUpload}>
                      <input className="button" type="file" name="image" onChange={(e)=>setImage(e.target.files[0])} />
                      <button className="link" type="submit">upload</button>
                     </form>}
         <Link className="link" to={'/changePassword'} >Change Password</Link>
    </div>
   

    <div className="right">
        <h2>Favorites</h2>
    <div className="favourite">
       {
        books.map(book=>{
            return (
                <>
            <div className="bookThumbnail">
            <h4>{book.book.title}</h4>
            <img src={book.book.image} alt="" />  
             <h4>{book.book.author}</h4>

             <button className="link" onClick={()=>handleRemoveFavorite(book.book._id, user._id)} >Remove from favorites</button>
                </div>    
         
            </>
            )
        })
       }
          

      </div>

    </div>

   
    </div>
      
      </>
  )
}

export default ProfilePage
