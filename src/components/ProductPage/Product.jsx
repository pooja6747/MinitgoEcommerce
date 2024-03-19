import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Recommendations from "./Recommendations";
import BestSeller from "./BestsSeller";
function Product() {
    return (
      <main className="min-vh-100 py-4  px-md-5">
        <div className="container-fluid  px-md-5  d-flex flex-column gap-4">
          <div className="row  gap-2 px-md-5">
            <div className="col ">
              <LeftSection />
            </div>
            <div className="col">
              <RightSection />
            </div>
          </div>
  
          <div className="container px-md-5">
            <div className="row py-2">
              <div className="py-4 d-flex flex-column gap-2">
                <h2 className=" fs-5 ">Best Sellers</h2>
                <BestSeller />
              </div>
            </div>
  
            <div className="row py-2">
              <div className="py-4 d-flex flex-column gap-2">
                <h2 className=" fs-5 ">Recommendations</h2>
                <Recommendations />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default Product;
  