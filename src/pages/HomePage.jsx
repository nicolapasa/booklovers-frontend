import axios from "axios"
import BookCard from "../components/BookCard"
import SearchBar from "../components/SearchBar"
import { useEffect, useState } from "react"
import url from "../config";

const HomePage = () => {

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

  
  return (
    <>
       <SearchBar setSearchString={setSearchString} />
       
        <div className="content">

           {
          
     books &&    books.map(book=>{

          return(
            <>
                    <BookCard key={book._id} book={book} />
            </>
          )
         })
           }

       


        </div>
    </>
  )
}

export default HomePage
