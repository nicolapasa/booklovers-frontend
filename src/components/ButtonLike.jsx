import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";
  import url from "../config";
import axios from "axios";
import { useState } from "react";

const ButtonLike = ({userid, bookId, likes, handleLikeButton}) => {

  return (
    <button className="buttonIcon" onClick={()=>handleLikeButton(bookId, userid)}> <FontAwesomeIcon icon={faHeart}  /> <span>{likes}</span>   </button>
  )
}

export default ButtonLike
