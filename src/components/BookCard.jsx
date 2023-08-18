import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
  return (
    <div className="bookCard">

    <img src={book.image} alt="" />
    <h3>{book.title}</h3>
    <h4>{book.author}</h4>
    <div className="socialContainer">
   <button className="buttonIcon"> <FontAwesomeIcon icon={faHeart}  /></button>    <Link className="link" to={'DetailsBook.jsx'}>Details</Link>
    </div>
   

</div>
  )
}

export default BookCard
