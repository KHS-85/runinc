import React from 'react'
import Nav from './Nav/Nav'
import Logo from '../../gfx/runinc_logo.svg'
import LogoHover from '../../gfx/runinc_logo_hover.svg'
import './header.scss'

const Header = () => {
    return (
        <header>
            <div className="row p-0 m-0">
                <div className="col-4">
                    <section className="logo">
                        <img className="logo_img" src={Logo} alt="RunInc Logo" />
                        <img className="logo_img--hover" src={LogoHover} alt="RunInc Logo" />
                    </section>
                </div>
                <div className="col-4">
                    <Nav />
                </div>
                <div className="col-4 m-0 p-0 pl-5">
                    <form id="searchform">
                    <input type="text"></input>
                    <button type="submit">search</button>
                    </form>
                </div>
            </div>

        </header>
    )
}

export default Header
