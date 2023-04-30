
import Card from "./Card";
import Nav from "./Nav";

import Footer from "../Footer"



function Body() {


    return (
        <>
            <div className="body-container">
                <div className="nav-container">
                    <Nav />
                </div>
                <div className="body-page">
                    <div className="body-products">
                        <Card />
                    </div>
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>

        </>
    );
}

export default Body;