import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>Home</div>
            <Link to='/about'>
                Go to About page
            </Link>
        </div>
    )
}

export default Home