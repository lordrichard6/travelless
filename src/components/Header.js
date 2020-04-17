import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="container">
                <header className="header">
                    Header part
                </header>
                <div className="content">
                    <nav className="sidebar">
                        Navigation
                    </nav>
                </div>
            </div>
        )      
    }
}

export default Header;