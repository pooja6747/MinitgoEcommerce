import React from "react";
import { BiStar } from 'react-icons/bi';
function StarRatings({ star1, star2, star3, star4, star5 }) {
    return (
      <div className="text-18px">
        <BiStar className={star1} />
        <BiStar className={star2} />
        <BiStar className={star3} />
        <BiStar className={star4} />
        <BiStar className={star5} />
      </div>
    );
  }
  
  export default StarRatings;
  