import { Link } from "react-router-dom";

export const Navbar2 = () => {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container bg-dark">
                <Link to="/" className="navbar-brand mb-0 h1 d-flex align-items-center">
                    <span className="navbar-brand mb-0 h1"><img src="src/front/assets/img/Secret order logo.png" width="50" height="50" className="d-inline-block align-top mr-2"></img></span>
                    <span className="navbar-brand mb-0 h1 text-warning">Secret Order</span>
                </Link>
                <div className="ml-auto">
                    <Link to="/">
                        <button className="btn btn-danger">Back home</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};