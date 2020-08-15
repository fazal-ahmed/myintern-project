import React from "react"

function RightQuality(props) {
    return (
        <div class="card mycards col-lg-5">
            <img class="card-img-top" src="/icons/financial.png" alt="image" />
            <div class="card-body">
                <h6 class="card-title"><strong>{props.heading}</strong></h6>
                <p class="card-text">{props.peragraph}<br/>{props.nextperagraph}</p>
            </div>
        </div>
    )
}

export default RightQuality;