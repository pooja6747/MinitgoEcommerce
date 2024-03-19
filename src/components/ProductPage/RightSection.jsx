import React from "react"; 
import cartIcon from '../../assets/cart.svg'
import StarRatings from "./StarRatings";
import paypalIcon from '../../assets/paypal.svg'
import mastercardIcon from '../../assets/mastercard.svg'
function RightSection() {
    return (
      <section className="w-100 md:w-50   ">
        <div className=" d-flex flex-column gap-2 px-4">
          <div className="d-flex flex-column gap-2 ">
            <div className="d-flex">
              <div className="bg-body-secondary  rounded p-2 d-flex align-items-center gap-2">
                <span className="small">❤️ Wishlist</span>
                <span className="small d-flex align-items-center">
                  <img
                    src={cartIcon}
                    alt="cartIcon"
                    className="w-100"
                    style={{ maxWidth: "24px" }}
                  />
                  Cart
                </span>
              </div>
            </div>
  
            <h2>T-Shirt Oversized Uchinaga Dark Bluee</h2>
  
            <div className="d-flex  gap-4 align-items-center w-100 ">
              <div className="d-flex align-items-center  gap-2 ">
                <StarRatings
                  star1={"text-warning bi bi-star"}
                  star2={"text-warning bi bi-star"}
                  star3={"text-warning bi bi-star"}
                  star4={"text-warning bi bi-star"}
                  star5={"text-muted bi bi-star"}
                />
                <span className="small pt-1">4.3</span>
              </div>
  
              <span className="small pt-1">2347 Reviews</span>
              <span className="small pt-1">4873 sold</span>
            </div>
            <p className="fw-bold fs-3">$40</p>
          </div>
  
          <div className="border-top h-100 py-2 d-flex flex-column gap-4 ">
            <div className="d-flex flex-column gap-1 pt-2">
              <h2 className="fw-semibold fs-5">Select Size</h2>
              <div className="d-flex gap-4" style={{ fontSize: "12px" }}>
                <span
                  className="border py-1 px-2 bg-body-secondary rounded "
                  style={{ width: "35px", textAlign: "center" }}
                  role="button"
                >
                  M
                </span>
                <span
                  className="border  py-1 px-2 bg-body-secondary rounded "
                  style={{ width: "35px", textAlign: "center" }}
                  role="button"
                >
                  S
                </span>
                <span
                  className="border py-1 px-2 bg-body-secondary  rounded "
                  style={{ width: "35px", textAlign: "center" }}
                  role="button"
                >
                  L
                </span>
                <span
                  className="border  py-1 px-2 bg-body-secondary rounded "
                  style={{ width: "35px", textAlign: "center" }}
                  role="button"
                >
                  XL
                </span>
                <span
                  className="border  py-1 px-2 bg-body-secondary  rounded "
                  style={{ width: "35px", textAlign: "center" }}
                  role="button"
                >
                  2XL
                </span>
              </div>
            </div>
  
            <div className="d-flex flex-column gap-1 ">
              <h2 className="fw-semibold fs-5">Select Color</h2>
              <div className="d-flex gap-4">
                <div className="border rounded px-1 py-1 d-flex " role="button">
                  <span className="border  d-inline-block py-2 px-2 rounded bg-primary"></span>
                </div>
                <div className="border rounded px-1 py-1 d-flex" role="button">
                  <span className="border d-inline-block py-2 px-2 rounded bg-success"></span>
                </div>
                <div className="border rounded px-1 py-1 d-flex " role="button">
                  <span className="border  d-inline-block py-2 px-2 rounded bg-danger"></span>
                </div>
                <div className="border rounded px-1 py-1 d-flex " role="button">
                  <span className="border  d-inline-block py-2 px-2 rounded bg-dark"></span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-1 ">
              <h2 className="  fs-4">Description</h2>
              <p className=" fs-6" style={{ textAlign: "justify" }}>
                Just a dope shirt in a dope fit. Our designs and silhouettes draw
                much of our inspiration from skateboarding culture, which shines
                through in this classic crisp black oversized down shirt.
              </p>
            </div>
  
            <div className="d-flex flex-column gap-1 ">
              <h2 className="  fs-4">Product Details</h2>
              <ul className="list-unstyled d-flex flex-column gap-1 fs-6">
                <li>
                  <span>→ </span>100% Cotton
                </li>
                <li>
                  <span>→ </span>32 Layer Print
                </li>
                <li>
                  <span>→ </span>Coloring Layer
                </li>
              </ul>
            </div>
  
            <div className="d-flex flex-column gap-1 ">
              <h2 className=" fs-4">Shipping Information</h2>
              <ul
                className=" list-unstyled d-flex flex-column  gap-1 "
                style={{ fontSize: "16px" }}
              >
                <li className="d-flex gap-4">
                  <span style={{ width: "80px" }}>Shipping: </span>
                  <span>Free Expeditions International</span>
                </li>
                <li className="d-flex gap-4">
                  <span style={{ width: "80px" }}>Estimated: </span>
                  <span>Estimated arrival on 17-20 March 2024</span>
                </li>
                <li className="d-flex gap-4">
                  <span style={{ width: "80px" }}>Delivery: </span>
                  <span>From Mumbai East</span>
                </li>
                <li className="d-flex gap-4">
                  <span style={{ width: "80px" }}>Payment: </span>
                  <div className="d-flex gap-2">
                    <img
                      src={paypalIcon}
                      alt="PayPal"
                      style={{ width: "20px" }}
                    />
                    <img
                      src={mastercardIcon}
                      alt="MasterCard"
                      style={{ width: "20px" }}
                    />
                  </div>
                </li>
              </ul>
            </div>
  
            <div className="  h-100 d-flex flex-column">
              <div className=" position-relative " style={{ height: "158px" }}>
                <textarea
                  className=" border h-100 w-100 rounded-top p-2"
                  rows="5"
                  placeholder="Enter comments"
                  style={{ resize: "none", outline: "none" }}
                ></textarea>
              </div>
              <button className="py-1 border bg-body-secondary  rounded-bottom w-100">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default RightSection;
  