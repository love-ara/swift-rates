import "./index.css"
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
    return (
        <>
            <div className="layout-container">
                <Header/>
                <main className="layout-main">
                    <Outlet/>
                </main>
                <Footer/>
            </div>

        </>
    )
};

export default Layout;