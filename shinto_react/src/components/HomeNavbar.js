import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.jpg";



class HomeNavbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-light" style={{backgroundC: "#e3f2fd"}}>
        <a className="navbar-brand col-md-auto" href="/">
            <img src={logo} alt = "logo" style = {{width: "200px", height: "auto"}}/>
        </a>
        
            
                        
                           <button className={this.getNavLinkClass("/login")}><NavLink to="/login" >Log In</NavLink></button>
                           <button className={this.getNavLinkClass("/signup")}><NavLink to="/signup">Sign Up</NavLink></button>
                        
                    </nav>)
    }
};
HomeNavbar = withRouter(HomeNavbar);
export default HomeNavbar;