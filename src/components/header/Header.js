import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>header</h1>
            <ul>
                <li><Link to="/aboutUs">about us</Link></li>
                <li><Link to="/articleDetails">article details</Link></li>
                {/* <li>
                    Portfolio
                    <ul>
                        <li><like >Portfolio Details</like></li>
                        <li><like>Portfolio List</like></li>
                    </ul>
                </li>
                <li><Link>Article</Link>
                    <ul>
                        <li><like>Article Details</like></li>
                        <li><like>Article List</like></li>
                    </ul>
                </li>
                <li><Link>Pages</Link>
                    <ul>
                        <li><like>Login</like></li>
                        <li><like>Register</like></li>
                        <li><like>My Profile</like></li>
                        <li><like>Pricing</like></li>
                        <li><like>FAQ</like></li>
                        <li><like>404</like></li>
                    </ul>
                </li>
                <li><Link>Contact</Link></li> */}
            </ul>
        </div>
    )
}

export default Header;
