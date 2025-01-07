import "./index.css"
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Navbar";

const Layout = () => {
    return (
        <>
            <div className="layout-container">
                <div className="header">
                    <Header/>

                </div>
                <main className="layout-main">
                    <Outlet/>
                </main>
                <div className="footer">
                    <Footer/>

                </div>
            </div>

        </>
    )
};

export default Layout;