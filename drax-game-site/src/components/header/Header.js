import { useContext } from "react"
import  "./Header.css"
import { CartContext } from "../../context/Cart-Context"
import { useNavigate } from "react-router-dom"

function Header(){

    const {cartData} = useContext(CartContext)
    const navigate = useNavigate()
    return <>
     <div>
      <nav className="navbar bg-body-tertiary  shadow p-2 mb-3 bg-white rounded  ">
        <div className="container-fluid">
          <p className="navbar-brand fs-2 text-danger mx-4 mt-1" href="#" id="logo">
           <strong>Drax-Gaming-Site</strong> 
          </p>
          <form className="d-flex " onClick={()=>{
             navigate('/Cart')
          }}>
            
            <i className="fa  fa-shopping-cart "  ></i>
            <p className="text-primary  fs-5 mx-1"><strong>{cartData.length === 0 ? "" : cartData.length  } </strong></p>
          </form>
        </div>
      </nav>
    </div>
         
    </>
}

export default Header

{/* <div className="navbar">
            <section className="logo">
               Drax-Game Site
            </section>
            <section onClick={()=>{navigate('/Cart')}}>
                <span className="number">{0}</span>
                <i className="fa fa-shopping-cart"  ></i>
            </section>

         </div> */}