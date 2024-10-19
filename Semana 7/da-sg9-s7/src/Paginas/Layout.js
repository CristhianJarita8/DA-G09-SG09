import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
    return (
        <>
            <nav className="header">
                <ul className="items_header">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/users">Usuarios</Link>
                    </li>
                    <li>
                        <Link to="/context">Components Context</Link>
                    </li>
                    <li>
                        <Link to="/services">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/about">Nosotros</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;