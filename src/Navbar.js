import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div style={{textAlign: 'center'}}>
            <Link to="/"> Home </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    )
}
