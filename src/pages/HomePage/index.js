import './index.css';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                Welcome to Swift Rates,<br/> a solution for your currency conversion problem!
            </header>
            <main className="HomePage-content">
                <Link to="/convert-currency" className="box">
                    Convert Currency
                </Link>
                <Link to="/multi-currency" className="box">
                    Multi-Currency Conversion
                </Link>
                <Link to="/rate-comparison" className="box">
                    Rate Comparison
                </Link>
                <Link to="/favorites" className="box">
                    Favorites
                </Link>
            </main>
        </div>
    );
}

export default HomePage;
