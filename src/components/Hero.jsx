import React, { Fragment, useEffect, useState } from 'react'
import AnimatedViewer from './AnimatedViewer'
import SHADOWS from '../assets/JS/utilities'
import Building from '../assets/images/_Building.svg'
import FilterImg from '../assets/images/Filte-Icon.svg'
import MainHero from '../assets/images/Header-Image.jpeg'

const Hero = () => {
  const [activeList, setActiveList] = useState(false)
  return (
    <Fragment>
        <AnimatedViewer>
          <div className="container mt-7">
            <div className="row">
              <div className="col-12">
                <div className="row text-start align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <h1 className="heading-title">Find Your Best Smart Real Estate</h1>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <p className="sub-title__hero"><span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Condimentum faucibus at netus nisl risus ut. Lorem ut enim proin lobortis euismod ultrices.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-5 position-relative">
                  <div className="search-container bg-body" style={{ boxShadow: SHADOWS.base }}>
                      <div className="search-body">
                          <img src={Building} alt="" />
                          <input type="text" className="form-control" placeholder='Search for city, neighborhood, agent, address..'/>
                      </div>
                      <div className="search-controller">
                          <div className="filter-opts position-relative">
                              <div className="filter-btn" onClick={() => setActiveList(prev => !prev)}>
                                  <img src={FilterImg} alt="" />
                              </div>
                              <div className="search-btn">
                                  <button className="btn-primary-bold">Search</button>
                              </div>
                              <ul className={activeList ? "list-container active" : "list-container" } style={{ boxShadow: SHADOWS.listShadow }}>
                                  <li className="list-container__item">Agriculture</li>
                                  <li className="list-container__item">Industrial</li>
                                  <li className="list-container__item">Office Space</li>
                                  <li className="list-container__item">Apartments</li>
                                  <li className="list-container__item">Commercial</li>
                                  <li className="list-container__item">Residential</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="hero-img-container">
                      <div className="main-hero">
                        <img src={MainHero} alt="" />
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </AnimatedViewer>
    </Fragment>
  )
}

export default React.memo(Hero)