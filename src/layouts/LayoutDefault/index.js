import { Link, NavLink, Outlet } from "react-router-dom";
import MiniCart from "../../components/MiniCart";

const LayoutDefault = () => {
    return (
        <>
            {/* thẻ a sẽ làm load lại trang web */}
            {/* dùng component Link trong react router sẽ kg load lại trang web */}
            <header className="header">
                <h1 className="header__logo">
                    <Link to="/">Logo</Link>
                </h1>
                <ul className="header__menu">
                    <li>
                        <NavLink to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Trang Products</NavLink>
                    </li>
                    <li>
                        <MiniCart />
                    </li>   
                </ul>
            </header>




            {/* Outlet  là phần luôn thay đổi, phần main, mà mỗi trang chỉ có cái khung đó change thôi */}
            <Outlet />




            <footer className="footer">
                CopyRight 28tech
            </footer>
        </>
    )
}
export default LayoutDefault;