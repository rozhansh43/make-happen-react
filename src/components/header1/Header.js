import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import bars from '../../assets/img/bars.png';

const Header = () => {
    return (

        <header className="header">
            <nav className="container">
                <div className='logo'>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className="menu">
                    <div class="item mobileIcon ">
                        <img class="bars" src={bars} alt="bars" />
                    </div>
                    <div className="item"><Link className="item-link" to='/ContactUs'>Contact</Link></div>
                    <div className="item collapse"><a className="item-link"  >Pages</a>
                        <div className="subMenu">
                            <div className="subMenu-item"><Link to='/Login'>Login</Link ></div>
                            <div className="subMenu-item"><Link to='/Register'>Register</Link ></div>
                            <div className="subMenu-item"><Link to='/MyProfile'>MyProfile</Link ></div>
                            <div className="subMenu-item"><Link to='/Pricing'>Pricing</Link ></div>
                            <div className="subMenu-item"><Link to='/FAQ'>FAQ</Link ></div>
                            <div className="subMenu-item"><Link to='/404'>404</Link ></div>
                        </div>
                    </div>
                    <div className="item collapse"><a className="item-link">Article</a>
                        <div className="subMenu">
                            <div className="subMenu-item"><Link to='/ArticleDetails'>Article Details</Link ></div>
                            <div className="subMenu-item"><Link to='/ArticleList'>Article List</Link ></div>
                        </div>
                    </div>
                    <div className="item collapse"><a button className="item-link" >Portfolio</a>
                        <div className="subMenu" >
                            <div className="subMenu-item"><Link to='/PortfolioDetails' >Portfolio Details</Link ></div>
                            <div className="subMenu-item"><Link to='/PortfolioList'>Portfolio List</Link ></div>
                        </div>
                    </div>
                    <div className="item"><Link className="item-link" to="/aboutUs">about us</Link></div>
                    <div className="item"><Link className="item-link" to="/">home</Link></div>
                </div>
            </nav>

        </header>
    )
}

export default Header;
