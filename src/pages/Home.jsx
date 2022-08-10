import React, { Fragment, Suspense } from 'react'
import PageLoader from '../components/PageLoader'
import useTitle from '../hooks/useTitle'
const Hero = React.lazy(() => import('../components/Hero'))

const Home = () => {
  useTitle("Home")
  return (
    <Fragment>
        <Suspense fallback={<h1>LOADING</h1>}>
            <Hero />
        </Suspense>
    </Fragment>
  )
}

export default Home