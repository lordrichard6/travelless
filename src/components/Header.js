import React, { Component } from 'react';

import logo from '../img/logo.png'


class Header extends Component {
    render() {
        return (
            <div className="container">
                <header className="header">
                    <img src={logo} alt="logo" className="logo"/>
                    <form action="#" className="search">
                        <input type="text" className="search__input" placeholder='Search Hotels'/>
                    </form>
                </header>
                <div className="content">
                    <nav className="sidebar">
                        Navigation 
                    </nav>
                    <main className="hotel-view">
                        Hotel View
                    </main>
                </div>
            </div>
        )      
    }
}

export default Header;