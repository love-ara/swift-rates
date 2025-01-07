import "./index.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Navbar";

const Layout = () => {
    return (
        <div className="App">
            <Header />
            <main className="layout-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
