
import React from 'react'

import './runincshop.scss'

import Shoe1 from '../../gfx/shoe_01.jpg'
import Shoe2 from '../../gfx/shoe_02.jpg'
import Shoe3 from '../../gfx/shoe_03.jpg'
import Shoe4 from '../../gfx/shoe_04.jpg'
import Shoe5 from '../../gfx/shoe_05.jpg'
import Shoe6 from '../../gfx/shoe_06.jpg'

const RunIncShop = () => {
    return (
        <article className="row p-0 m-0">
            <aside className="yellow-text-box col-3">
                <h2>Shop</h2>
                <h3><strong>Runinc Shop</strong></h3>
                <p className="fragt">Gratis fragt ved over kr. 500,-</p>
                <p>Nike</p>
                <p>Adidas</p>
                <p>Puma</p>
                <p>Asics</p>
                <p>Hummel</p>
            </aside>
            <div className="col-9 p-0 m-0">
                <div className="row">
                    <div className="col-8"></div> 
                    <div className="col-4 blackbanner">
                        <h1>Shop</h1>
                    </div>
                </div>
                <section className="shoecards">
                    <div className="row">

                    </div>
                    <div className="row ">
                        <div className="col-4">
                            <div className="shoes"><img src={Shoe1} alt="running shoe" /> <p>Puma Highland 3000</p></div>

                        </div>
                        <div className="col-4">
                            <div className="shoes"><img src={Shoe2} alt="running shoe" /><p>Asics Free Street</p></div>
                        </div>
                        <div className="col-4">
                            <div className="shoes"><img src={Shoe3} alt="running shoe" /><p>New Balance Bounce</p></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="shoes"><img src={Shoe4} alt="running shoe" /><p>New Balance New York</p></div>
                        </div>
                        <div className="col-4">
                            <div className="shoes"><img src={Shoe5} alt="running shoe" /><p>Nike Zoom Fly</p></div>
                        </div>
                        <div className="col-4">
                            <div className="shoes"><img src={Shoe6} alt="running shoe" /><p>Nike React Infinity</p></div>
                        </div>
                    </div>
                </section>
            </div>
        </article>

    )
}

export default RunIncShop