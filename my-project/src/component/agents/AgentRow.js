import React from "react"
import AgentDiv from "./AgentDiv"

function AgentRow(props) {
    return (
        <div className="row lastrow">

            <AgentDiv heading={props.heading} work={props.work} worktwo={props.worktwo} placeone={props.placeone} placetwo={props.placetwo} placethree={props.placethree}/>

            <AgentDiv heading={props.heading} work={props.worktwo} worktwo={props.worktwo} placeone={props.placeone} placetwo={props.placetwo} placethree={props.placethree}/>

        </div>
    )
}

export default AgentRow;