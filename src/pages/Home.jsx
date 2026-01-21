import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()

    return (
        <div>
            <div>Home</div>
            <button onClick={() => {
                navigate('/about')
            }}>
                Go to About Page
            </button>
        </div>
    )
}

export default Home