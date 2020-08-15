import React from "react"

function LeftQuality(props) {
    return (
        <div class="card mycards col-lg-7">
            <img class="card-img-top" src="/icons/mortgage.png" alt="image" />
            <div class="card-body">
                <h6 class="card-title"><strong>{props.heading}</strong></h6>
                <p class="card-text">{props.peragraph}<br />{props.nextperagraph}</p>
            </div>
        </div>
    )
}

export default LeftQuality;