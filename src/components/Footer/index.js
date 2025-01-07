import "./index.css"

const Footer = () =>{
    var currentYear =   new Date().getFullYear();


    return (
        <>
            <div className="footer">
                <p>&copy;{currentYear} Swift Rates. All rights reserved. </p>
            </div>
        </>
    )
};

export default Footer;