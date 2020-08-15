import React from "react"
import AgentRow from "./AgentRow"

function Agents() {
    return (
        <React.Fragment>
            <AgentRow heading="Bill Gates" work="Living Reality" worktwo="Cir Reality" placeone="Ontario Canada" placetwo="Markham,L3R 6G2" placethree="Real Estate Agency" />
            <AgentRow heading="Bill Gates" work="The Red Pin" worktwo="Shindico" placeone="Ontario Canada" placetwo="Ajax,L1S 6G2" placethree="Real Estate Agency"/>
            <h4 className="viewmore">VIEW MORE</h4>
        </React.Fragment>
    )
}

export default Agents;