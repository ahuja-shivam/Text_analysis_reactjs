import React from "react";
import {Link} from "react-router-dom"

export default function Navbarbs(props) {
    return (
        <div>
            <div className={`bg-${props.mode} collapse`} id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className={`text-${props.mode ==='light'?'black': 'white'}`}>About</h4>
                            <p className="text-muted">
                                Word Analysis is an app which will let you analysis your text.
                            </p>
                        </div>

                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className={`text-${props.mode ==='light'?'black': 'white'}`}>Contact</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/shivamahujax/"
                                        className={`text-${props.mode === 'dark'?'white':'black'} follow`}
                                    >
                                        Connect on LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/ahujaxshivam/"
                                        className={`text-${props.mode === 'dark'?'white':'black'} follow`}
                                    >
                                        Like on Instagram
                                    </a>
                                </li>
                                
                                <li>
                                    <a
                                        href="https://github.com/ahuja-shivam"
                                        className={`text-${props.mode === 'dark'?'white':'black'} follow`}
                                    >
                                        GitHub Profile
                                    </a>
                                </li>
                                <li>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                            onClick={props.toggleMode}
                                        />
                                        <label className={`form-check-label text-${props.mode === 'dark'?'light': 'dark'}`} htmlFor="flexSwitchCheckDefault">
                                            Dark Mode
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`navbar navbar-${props.mode} bg-${props.mode} shadow-sm`}>
                <div className="container">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <strong>IELTS Writing Practice</strong>
                    </Link>
                                <Link to="/teams" className={`text-${props.mode === 'dark'?'white':'black'} follow`}>
                                Our team
                        </Link>
                                
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarHeader"
                        aria-controls="navbarHeader"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </div>
    );
}
