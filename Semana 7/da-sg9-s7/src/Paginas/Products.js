import { Link, Outlet } from "react-router-dom";

export const Products = () => {
    return (
        <>
            <div>
                <input type='search' placeholder='Search Prodcuts' />
            </div>
            <div>
                <Link to='search' placeholder='search products' />
                <div>
                    <Link to='featured'>Features</Link>
                    <Link to='new'>New</Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}