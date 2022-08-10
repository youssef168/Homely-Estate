import React, { Fragment, PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import SHADOWS from '../assets/JS/utilities';

/**
 * Component used to handle error boundries, Will show the user an error component when any error happens
 * * Should Use It In Your Root Component
 */
export default class ErrorBoundry extends PureComponent { // Used PureComponent To Prevent Re-Render Multi Times Without any reasonable reason to render!
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    
  render() {
    if (this.state.hasError) {
        return (
            <Fragment>
                <div className="container extra-container-style">
                    <div className="row">
                        <div className="col-12">
                            <div className="err-container" style={{ boxShadow: SHADOWS.base }}>
                                <div className="err-container__header">
                                    <div className="err-ico">
                                        <FontAwesomeIcon icon={faTriangleExclamation}/>
                                    </div>
                                    <h5 className="err-header__text">Unexpected Error Occured!</h5>
                                </div>
                                <div className="err-container__body">
                                    <p>
                                        We're Sorry For This Technical Error, You Maybe Clicked Something Or You Were Trying To Use Something
                                        but it caused an unexpected error and we're sorry for that, you can try to refresh the page and try again, if it didn't work, report this bug and we'll fix it as soon as possible
                                    </p>
                                </div>
                                <div className="err-container__footer">
                                    <div className="btns-container">
                                        <button className='danger-butn'>Report</button>
                                        <button className='white-butn' onClick={() => window.location.reload()}>Refresh Page</button>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Fragment>
          )
    }
    return this.props.children
  }
}
