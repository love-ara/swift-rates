import './index.css';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="HomePage-header">
                Welcome to Swift Rates,<br/> a solution for your currency conversion problem!
            </header>
            <main className="HomePage-content">
                <div className="box">
                    Convert Currency
                </div>
                <div className="box">
                    Multi-Currency Conversion
                </div>
                <div className="box">
                    Rate Comparison
                </div>
                <div className="box">
                    Favorites
                </div>
            </main>
        </div>
    );
}

export default HomePage;
