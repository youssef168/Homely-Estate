import React, { Fragment } from 'react'
import AnimatedViewer from './AnimatedViewer'

const Hero = () => {
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
            </div>
          </div>
      </AnimatedViewer>
    </Fragment>
  )
}

export default React.memo(Hero)