import { useContext } from "react"
import "./Item.css"
import { CartContext } from "../../context/Cart-Context"

function Item({ item ,image}) {

  const {addCartData} = useContext(CartContext)
  return <>
    <div className=" card mt-4 mx-4 mb-2 shadow p-2 mb-3 bg-white rounded" id="card" style={{ "width": "38rem", "maxHeight": "450px" }}>
      <img src={image} className="card-img-top" alt="..." style={{ height: "220px", objectFit: "fill" }} />
      <div className="d-flex">
        <div>
          <p className="card-title mx-3 mt-1 fs-4 "><strong>{item?.title}</strong> </p>
          <p className="card-title mx-3 fs-5 ">{item?.description}</p>
          <p className="card-title mx-3 fs-5">₹ {item?.price}/-</p>
           <div id="button">
           <button className="  btn bg-danger text-white px-4 py-2  rounded mb-2" onClick={()=>{
            {addCartData(item,image)}
           }}>Add To Cart</button>
           </div>
           
        </div>
      </div>
    </div>

  </>
}

export default Item

{/* <div className="card">
             <img className="card-img" src={item?.image} alt="" />
             <div className="card-title">{item.title} </div>
             <div className="card-desc" >{item.description} </div>
             <div className="card-footer">
                  <div className="price">{item.price}</div>
                  {/* <button className="btn" onClick={ ()=>
                    {addCartData(item)}} >Add to Cart</button> */}
                    // <button>Add</button>
            //  </div>

          // </div> */}