import axios from "axios"
import BookCard from "../components/BookCard"
import SearchBar from "../components/SearchBar"
import { useEffect, useState } from "react"
import url from "../config";
import {useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate=useNavigate()
  const [books, setBooks] = useState([])
  const [searchString, setSearchString] = useState('')

 const getData=async()=>{
  const response=await axios.get(`${url.URL_BASE}/api`)

  setBooks(response.data.books)
 
 }


  useEffect(() => {

         getData()
    
  }, [])


//search method

const getSearch= async()=>{
  const response=await axios.get(`${url.URL_BASE}/api/search/${searchString}`)

  setBooks(response.data.books)

}
useEffect(() => {
  console.log(searchString)
if(searchString!='')  getSearch()
}, [searchString])


const handleLikeButton=async (bookId, userid)=>{
    
  const response=await axios.post(`${url.URL_BASE}/api/book/like/${bookId}`, {userid})
    
  window.location.reload(false);

}
  

 if(!books){
  return ( 'loading' )
 }
else{
  return (
    <>
       <SearchBar setSearchString={setSearchString} />
       
        <div className="content">

           {
          
     books &&    books.map(book=>{

          return(
            <>
                    <BookCard  book={book} handleLikeButton={handleLikeButton} />
            </>
          )
         })
           }

       


        </div>
    </>
  )
}
}
export default HomePage
