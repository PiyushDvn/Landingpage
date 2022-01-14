import { Link } from "react-router-dom";
import React from 'react'
const Notfound = () => {
    return (
        <div className="notavailable">
            <h2>Sorry</h2>
            <p> The page cannot be found</p>
            <Link to="/Landingpage" >Back to homepage....</Link>
        </div>
    );
}

export default Notfound;