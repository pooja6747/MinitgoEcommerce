import React, { useState } from 'react';
import data from './cart.js'
import './cartCSS.css'

const Cart = () => {
    const [dataproduct,setData] = useState(data)
    const [cart, setCart] = useState([]);
    const [currentPosition, setCurrentPosition] = useState(0);//initial index values

    const handleAddCart = (id, title, image, price) => {
        let newCart = [...cart];
        if (newCart.some((i) => i.id === id)) {
            let itemIndex = newCart.findIndex((i) => i.id === id);

            newCart[itemIndex]["count"] = cart[itemIndex]["count"] + 1;
        } else {
            newCart.push({ id: id, count: 1, title: title, image: image, price: price });
        }

        setCart([...newCart]);  
        console.log("+")
    };

    const handleRemoveCart = (id) => {
        let newCart = [...cart];
        if (newCart.some((i) => i.id === id)) {
            let itemIndex = newCart.findIndex((i) => i.id === id);
            newCart[itemIndex]["count"] =
                cart[itemIndex]["count"] === 0 ? 0 : cart[itemIndex]["count"] - 1;
        } else {
            newCart.push({ id: id, count: 1 });
        }

        setCart([...newCart]);

        //count 0
        const filteredCount = cart.filter((element, index) => {
            return element.count >= 1;
        });
        setCart(filteredCount);
        console.log("-")
    };


    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8  mt-2">
                        <div className="card-item p-2">
                            <div className="row m-1">
                                <h6 className='title rounded-5 p-2 text-black '>Cart - 2 Item </h6>
                            </div>
                            {
                                dataproduct.slice(currentPosition, currentPosition + 2).map((item, index) => {
                                    let cartIndex = cart?.findIndex((i) => i.id === item.id);
                                    return (
                                        <div className="container" key={index}>
                                            <div className="d-flex justify-content-between flex-wrap" >
                                            <div className="img-block">
                                                <div className="display-detail d-flex justify-content-start flex-wrap mt-2">
                                                    <div className="border border-1 mx-5 p-2">
                                                        <img src={item.image} alt="shirt" className='img-fluid green-shirt' />
                                                    </div>

                                                    <div className="item-detail">
                                                        <h6>{item.title}</h6>
                                                        <h6 className='fw-normal'>Color :{item.color}</h6>
                                                        <p className='fw-normal'>Size : {item.size}</p>
                                                        <div className="icon mt-2">
                                                            <span className='bg-red rounded-1 text-white p-1 mx-1 px-1'><i className="fa fa-trash-o mx-1" aria-hidden="true"></i></span>
                                                            <span className='bg-secondary rounded-1 text-white p-1 mx-1 px-1'><i className="fa fa-heart-o mx-1" aria-hidden="true"></i></span>

                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="counter-block mt-3">
                                                <div className="number">
                                                    <span className="minus px-2 mx-1 rounded-1" onClick={() => handleRemoveCart(item.id)}>-</span>
                                                    <input value={cart[cartIndex]?.count > 0 ? cart[cartIndex]?.count : 1 } className='text-center'/>
                                                    <span className="plus px-2 mx-1 rounded-1" onClick={() =>
                                                        handleAddCart(
                                                            item.id,
                                                            item.title,
                                                            item.image,
                                                            item.price
                                                        )
                                                    }>+</span>
                                                </div>
                                                <p className='text-center' style={{ marginTop: "5px" }}>
                                                <span className='fw-bold'>
                                                   {item.price}
                                                </span>
                                            </p>
                                            </div>
                                            </div>
                                       <hr/>
                                        </div>
                                     
                                       
                                    )
                                })
                            }


                        </div>


                        <div className="card-item mt-5 p-3">
                            <h6>Expected shipping Delivery</h6>
                            <p>12.10.2020 - 13.10.2020</p>
                        </div>

                        <div className="card-item mt-5 p-3">
                            <h6>We accept</h6>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="icons d-flex justify-content-between flex-wrap">
                                        <img className='img-icons mx-1' src='https://cdn.pixabay.com/photo/2017/08/10/14/02/visa-2623015_640.png' />
                                        <img className='img-icons' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784403_640.png" alt="" />
                                        <img className='img-icons mx-1' src='https://cdn.pixabay.com/photo/2014/10/30/14/13/credit-card-509323_640.png' />
                                        <img className='img-icons' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784403_640.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card-item">
                            <div className="row mx-1 mt-2  p-2">

                                <h6 className='title rounded-5 p-2 text-black'>Summary</h6>
                                <div className="d-flex justify-content-between">
                                    <p>Products</p>
                                    <p>1200RS</p>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-1">
                                    <p>Shipping</p>
                                    <p>100RS</p>

                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mt-1">
                                    <p className='fs-6 fw-bold'>Total amount</p>
                                    <p className='fs-6 fw-bold'>1350RS</p>
                                </div>


                            </div>

                            <button className='btn btn-sm mx-3 my-2 p-2 text-black rounded-5 px-3 checkoutBtn '>Go to checkout</button>

                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default Cart