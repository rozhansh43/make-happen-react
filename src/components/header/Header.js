import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>header</h1>
            <ul>
                <li><Link to="/aboutUs">about us</Link></li>
                <li><Link to="/articleDetails">article details</Link></li>
                <li>
                    Portfolio
                    <ul>
                        <li><Link to='/PortfolioDetails' >Portfolio Details</Link ></li>
                        <li><Link to='/PortfolioList'>Portfolio List</Link ></li>
                    </ul>
                </li>
                <li>Article
                    <ul>
                        <li><Link to='/ArticDetails'>Article Details</Link ></li>
                        <li><Link to='/ArticleList'>Article List</Link ></li>
                    </ul>
                </li>
                <li>Pages
                    <ul>
                        <li><Link to='/Login'>Login</Link ></li>
                        <li><Link to='/Register'>Register</Link ></li>
                        <li><Link to='/MyProfile'>MyProfile</Link ></li>
                        <li><Link to='/Pricing'>Pricing</Link ></li>
                        <li><Link to='/FAQ'>FAQ</Link ></li>
                        <li><Link to='/404'>404</Link ></li>
                    </ul>
                </li>
                <li><Link to='/ContactUs'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;
