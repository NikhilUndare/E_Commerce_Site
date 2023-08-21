import { useCallback, useContext, } from "react"
import { CartContext } from "../../context/Cart-Context"
import "./Cart.css"
import useRazorpay from 'react-razorpay'
import Header from "../header/Header"
import { useNavigate } from "react-router-dom"

function Cart() {
    const { clearCart } = useContext(CartContext)
    const { cartData } = useContext(CartContext)
    const navigate = useNavigate()
    const [RazorPay] = useRazorpay();
    const razorPayDisplay = useCallback(async (total) => {
        const options = {
            key: "rzp_test_nRWF1jm28H3rXs",
            amount: total * 100,
            currency: "INR",
            name: "Drax-gaming-site",
            description: "Gaming Transaction",
            handler: (res) => {
                console.log(res)
            },
            prefill: {
                name: "Nikhil Undare",
                email: "nikhil@gmail.com",
                contact: "9191919191"
            },
            notes: {
                address: "Drax Gaming Store",
            },
            theme: {
                color: "#3399cc",
            }
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
    }, [RazorPay])

    return <>
        <div >
            <Header />
            <div className="cart-cont">
                <section className="billing-cont-1" >
                    {cartData.length === 0 ? <div>
                        <div className='m-5 w-100 text-center fs-1'>The Cart is Empty !</div>
                    </div> : ""}
                    <div className="container">
                        {cartData.map((cartItem) => {
                            return <div>
                                <div className=" card mt-4 mx-4 mb-2 shadow p-2 mb-3 bg-white rounded" id="card" style={{ "width": "20rem", "maxHeight": "450px" }}>
                                    {/* <img src={cartItem.image} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "fill" }} /> */}
                                    <div className="d-flex">
                                        <div>
                                            <p className="card-title mx-3 mt-1 fs-4 "><strong>{cartItem?.title}</strong> </p>
                                            <p className="card-title mx-3 fs-5 ">{cartItem?.description}</p>
                                            <p className="card-title mx-3 fs-5">₹ {cartItem?.price}/-</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    { cartData.length === 0 ? "" :
                    <button className="btn-1" onClick={() => {
                        clearCart()
                    }}>Clear Cart</button>}
                    
                </section>
                <section className="billing-cont-2">
                     <button className=" btn bg-info mx-3 mb-5 rounded mb-2" onClick={()=>{
                        navigate('/')
                     }}>Back</button>
                    <div className="bill">Billing information </div>
                    <div className="content">{cartData.map((item) => {
                        return <div>

                            <span>{item.title}</span> :
                            <span className="price">{item.price}</span>
                        </div>

                    })}</div>
                    <div className="total">Total : 10000</div>
                    <div className="btn-cont" onClick={() => {
                        razorPayDisplay(10000)
                    }}><button className=" btn bg-success text-white mt-2 mx-2  rounded mb-2">CheckOut</button></div>
                </section>
            </div>
        </div>
    </>
}

export default Cart