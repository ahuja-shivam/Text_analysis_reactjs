import React from 'react'


export default function Navbarbs(props) {
    return (
        <div className='FixedNav'>
            <div className="bg-dark collapse" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">Word Analysis is an app which will let you analysis your text.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://www.linkedin.com/in/shivamahujax/" className="text-white follow">Connect on LinkedIn</a></li>
                                <li><a href="https://www.instagram.com/ahujaxshivam/" className="text-white follow">Like on Instagram</a></li>
                                <li><a href="https://github.com/ahuja-shivam" className="text-white follow">GitHub Profile</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a href="/" className="navbar-brand d-flex align-items-center">
                        <strong>Text Analysis</strong>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
