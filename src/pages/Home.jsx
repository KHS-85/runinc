// snippet: rafce //
import React from 'react'
import WeLoveRunning from '../components/Layout/WeLoveRunning/WeLoveRunning'
import Event from './Event'
import Shop from './Shop'
import Contact from './Contact'

const Home = () => {
    return (
        <div className="row m-0">
            <div className="col-12 p-0">
                <WeLoveRunning />
                <Event />
                <Shop />
                <Contact />
            </div>
        </div>
    )
}

export default Home