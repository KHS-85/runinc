import React from 'react'
import './contactus.scss'
import Map from '../../gfx/map.jpg'

const ContactUs = () => {
    return (
        <div>
            <article className="row p-0 m-0 contactpage">
                <section Map className="col-6 p-0 m-0 map">
                    <div className="hoverWrapper img-fluid p-0 m-0">
                        <a href="https://www.google.dk/maps/place/Kannikegade+12,+8000+Aarhus/"
                            target="_blank" rel="noopener noreferrer">
                            <img src={Map} alt="Google map with the location of RunInc" />
                            <div id="hoverShow1">Contact</div>
                        </a>
                    </div>
                    <div className="adressbox">
                        <h2>RunInc</h2>
                        <p>Kannikegade 12</p>
                        <p>8000 Århus C</p>
                        <p><a href="skype:26132696?call">Telefon 26 13 26 96</a></p>
                        <a href="mailto:info@runinc.dk" target="_top">info@runinc.dk</a>
                    </div>
                </section>
                <section className="col-6 p-0 m-0 msgform">
                    <form className="msgformcomp">
                        <h2>Send en besked</h2>
                        <p>Navn:</p>
                        <input type="text" name="Navn" id="navn" required />
                        <p>Email:</p>
                        <input type="text" name="email" id="email" required />
                        <p>Telefonnr.:</p>
                        <input type="text" name="telefon" id="telefon" required />
                        <p>Besked:</p>
                        <textarea name="besked" id="besked"></textarea> <br /><br />
                        <button className="msgbutton" type="submit">Send besked</button>
                    </form>
                </section>
            </article>
        </div>

    )
}

export default ContactUs