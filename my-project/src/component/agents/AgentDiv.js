import React from "react"

function AgentDiv(props) {
    return (
        <React.Fragment>
         <div className="agentdiv col-5 col-md-5 col-sm-10">
             <div className="imground">
            <img  alt="100x100" className='photo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/220px-Bill_Gates_2018.jpg"
                data-holder-rendered="true" />
            </div>
            <div class="card cardagent" >
                <div class="card-body">
                    <h5 class="card-title billheading">{props.heading}</h5><br /><br />
                    <p class="card-subtitle mb-2">{props.work}  |  {props.placethree}</p><br /><br />
                    <a class="card-link">{props.placeone}</a>
                    <a class="card-link">{props.placetwo}</a>
                    <a class="card-link">{props.placethree}</a>
                    <br /><br />
                    <a class="card-link text-muted">State & Country</a>
                    <a class="card-link text-muted">City & Zip</a>
                    <a class="card-link text-muted">Contact Type</a>
                </div>
            </div>
         </div>
        </React.Fragment>
    )
}

export default AgentDiv;