import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="/">AF FINAL EXAM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Catergories </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/products">Products </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Addcatergory">Create Catogeies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AddProduct">Create Product</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default navbar;