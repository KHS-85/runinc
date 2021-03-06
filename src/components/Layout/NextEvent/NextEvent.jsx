import React from 'react'
import './nextevent.scss';

const NextEvent = () => {
    return (
        <div className="row p-0 m-0">
            <div className="col-9 p-0 m-0">
                <div class="hero-image-event">
                    <div class="hero-text-event">
                        <h1>Next event</h1>
                    </div>
                </div>
            </div>
            <div className="yellow-text-box col-3">
                <h2 className="h2-event">Events</h2>
                <h3><strong>Copenhagen Marathon</strong></h3>
                <p>Den 29. maj 2018</p>
                <h4>Aarhus City Run</h4>
                <p><small>Den 1. juni 2018</small></p>
                <h4>Berlin Marathon</h4>
                <p><small>Den 6. juni 2018</small></p>

            </div>
        </div>

    )
}

export default NextEvent
