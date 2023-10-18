import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";


function Header() {
    
    const cart = useSelector(state => state.cart);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className={({ isActive, isPending }) => {
                return isActive ? "text-success nav-link fw-bold fs-5" : "nav-link fw-bold fs-5";
            }} to="/">
            Products App
          </NavLink>

          <div className="d-flex">
            <NavLink
              className={({ isActive, isPending }) => {
                return isActive ?"nav-link active m-2 text-success fs-5": "nav-link active m-2";
            }}
              aria-current="page"
              to="/register"
            >
              Register
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) => {
                return isActive ?"text-success nav-link active m-2 fs-5" :"nav-link active m-2";
            }}
              aria-current="page"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink className={({ isActive, isPending }) => {
                return isActive ? "position-relative text-success nav-link active m-2" : "position-relative nav-link active m-2";
            }}
              aria-current="page"
              to="/cart">
            <FontAwesomeIcon icon={faCartShopping} className="fs-4"/>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
    {cart.cartTotalQuantity}
    <span class="visually-hidden">unread messages</span>
  </span>
</NavLink>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/*"
            ></Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
