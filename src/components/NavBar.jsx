import React, { Fragment } from 'react'
import LazyLoad from 'react-lazyload' 
import Logo from '../assets/images/Logo-Dark.svg'
import AnimatedViewer from './AnimatedViewer'


const NavBar = () => {
  return (
    <Fragment>
        <AnimatedViewer>
            <div className="container">
                <div className="nav-container">
                    <div className="left-side__nav">
                        <div className="logo">
                            <LazyLoad>
                                <img src={Logo} alt="" />
                            </LazyLoad>
                        </div>
                        <div className="nav-list-container">
                            <ul className="nav-list-items">
                                <li className="nav-list-item">Home</li>
                                <li className="nav-list-item">About us</li>
                                <li className="nav-list-item">Listings</li>
                                <li className="nav-list-item">Agents</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-side__nav">
                        <button className="btn-primary-soft">Contact Us</button>
                    </div>
                </div>
            </div>
        </AnimatedViewer>
    </Fragment>
  )
}

export default React.memo(NavBar)