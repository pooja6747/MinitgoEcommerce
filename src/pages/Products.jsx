import React, { useState } from 'react'; 
import { FaLocationDot } from "react-icons/fa6"; 
import Filter from '../components/Filter';
import Ban from '../components/images/product.png'
const HomeProducts = () => {
return(
<>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div class="container">
        <h6>|<FaLocationDot className='fs-3 p-1'/>Find Near You </h6>
        <div class="row">
           
          <Filter brand="Test" />
             
            <div class="col-md-10">
                <div class="row">
                     
                    <div class="col-6 col-sm-3 py-2">
                        <div class="product-card ">
                            <div class="product-image">
                                <img src={Ban}   alt="Product 1"/>
                               
      
                             <div class="offer-tag bg-warning rounded-pill text-center p-1 text-light" >25% Off</div>
       
   
                            </div>
                            <div className='product-content'>
                            <h6>T-Shirt | Nexa Brand | color: white | other content </h6>
                            <h5>Price: <sup>&#x20B9;</sup>399<span className='text-decoration-line-through text-muted fs-6 fw-light'>599</span>
                            <span className='text-muted' style={{fontSize:'13px'}}> In-Stock</span></h5>
                            <p class="product-rating text-warning">
                                Rating: &#9733;&#9733;&#9733;&#9733;&#9734;  
                            </p>
                            <p class="product-distance text-secondary ">
                               Distance: 5km away.
                            </p>
                            
                            
                            </div>
                        </div>
                    
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
     
</>
);

}

export default HomeProducts;
