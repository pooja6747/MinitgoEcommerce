
import React,{useState} from "react";
import { pData } from "./data";


function Recommendations() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsToShow = 4; 
    const itemsToSlide = 3; 
  
    const handleNext = () => {
      const newSlide = currentSlide + itemsToSlide;
      setCurrentSlide(newSlide % pData.length);
    };
  
    const handlePrev = () => {
      const newSlide = currentSlide - itemsToSlide;
      setCurrentSlide((newSlide + pData.length) % pData.length); 
    };
  
    return (
      <div id="recommendationsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {Array.from({ length: Math.ceil(pData.length / itemsToShow) }, (_, i) => (
            <div
              key={i}
              className={`carousel-item${i === 0 ? ' active' : ''}`}
            >
              <div className="row g-2">
               
                {pData.slice(i * itemsToShow, (i + 1) * itemsToShow).map((product, index) => (
                  <div key={index} className="col-sm-3">
                    <div className="border rounded p-2">
                      <div className=" border rounded" style={{height:"300px"}}>
                        <img src={product.imageurl} alt="img" className="w-100 h-100 rounded" />
                      </div>
                      <div className="d-flex flex-column gap-1 px-2">
                        <span className="font-weight-bold">{product.name}</span>
                        <span>{product.price}</span>
                        <span className="text-sm">{product.description}</span>
                        <button className='border bg-body-secondary  rounded'>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
        className="carousel-control-prev border rounded bg-secondary"
        type="button"
        data-bs-target="#recommendationsCarousel"
        data-bs-slide="prev"
        onClick={handlePrev}
        style={{height:"30px",width:"30px",top:"35%" ,left:"-5px"}}
      >
        <span className="carousel-control-prev-icon  " aria-hidden="true" ></span>
        
      </button>
      <button
        className="carousel-control-next border rounded bg-secondary"
        type="button"
        data-bs-target="#recommendationsCarousel"
        data-bs-slide="next"
        onClick={handleNext}
        style={{height:"30px",width:"30px",top:"35%" ,right:"-5px"}}
        
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
    );
  }

export default Recommendations
