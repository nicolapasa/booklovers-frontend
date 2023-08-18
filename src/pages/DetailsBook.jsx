import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import url from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";

const DetailsBook = () => {

 const {id}  = useParams('id')


 const [book, setBook] = useState('')



const getBook=async()=>{

    const response=await axios.get(`${url.URL_BASE}/api/book/${id}`)
    setBook(response.data.book)

}

useEffect(() => {
    

    getBook()
}, [id])


  return (
    <div className="content-page">
     <div className="left">
     <img src={book.image} alt="" />
    <h3>{book.title}</h3>
    <h4>{book.author}</h4>
 
    <button className="buttonIcon"> <FontAwesomeIcon icon={faHeart}  /></button>  
        </div>   
      <div className="right">
      <p>
        {book.plot}
    </p>
          <img src="/images/bg2.png" alt="" />
      </div>

    </div>
  )
}

export default DetailsBook
